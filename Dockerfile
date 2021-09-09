# syntax=docker/dockerfile:1.3
ARG RUBY_VERSION=2.7.4

### build

FROM neinteractiveliterature/base-ruby-build:${RUBY_VERSION} as build

USER root
WORKDIR /usr/src/intercode

RUN apk add --no-cache shared-mime-info npm
RUN npm install -g yarn

COPY Gemfile Gemfile.lock .ruby-version /usr/src/intercode/
RUN --mount=type=cache,target=/usr/local/bundle,id=bundler \
  bundle install -j4 --without intercode1_import \
  && echo 'Running bundle clean --force' \
  && bundle clean --force \
  && echo 'Copying /usr/local/bundle to /usr/local/bundle-tmp' \
  && cp -R /usr/local/bundle /usr/local/bundle-tmp \
  && echo 'Cleaning cached gems and intermediate build files from /usr/local/bundle-tmp' \
  && rm -rf /usr/local/bundle-tmp/cache/*.gem \
  && find /usr/local/bundle-tmp/gems -name '*.c' -delete \
  && find /usr/local/bundle-tmp/gems -name '*.o' -delete
RUN rm -rf /usr/local/bundle && mv /usr/local/bundle-tmp /usr/local/bundle

COPY package.json yarn.lock /usr/src/intercode/
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,id=yarn \
  yarn install

COPY --chown=www:www . /usr/src/intercode

ENV RAILS_ENV production
ENV NODE_ENV production
ENV AWS_ACCESS_KEY_ID dummy
ENV AWS_SECRET_ACCESS_KEY dummy

RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,id=yarn \
  --mount=type=cache,target=/usr/src/intercode/tmp/cache,id=rails \
  DATABASE_URL=postgresql://fakehost/not_a_real_database yarn run build
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,id=yarn \
  --mount=type=cache,target=/usr/src/intercode/tmp/cache,id=rails \
  DATABASE_URL=postgresql://fakehost/not_a_real_database yarn run build:cli
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,id=yarn \
  --mount=type=cache,target=/usr/src/intercode/tmp/cache,id=rails \
  DATABASE_URL=postgresql://fakehost/not_a_real_database bundle exec rails assets:precompile

### test

FROM build AS test

ENV RAILS_ENV test
ENV NODE_ENV test

USER root
RUN apk add --no-cache postgresql-client

### pre-production

FROM build AS pre-production

RUN rm -rf node_modules

### production

FROM neinteractiveliterature/base-ruby-production:${RUBY_VERSION} as production

COPY --from=pre-production /usr/local/bundle /usr/local/bundle
COPY --from=pre-production --chown=www /usr/src/intercode /usr/src/intercode
WORKDIR /usr/src/intercode

CMD bundle exec rails server -p $PORT -b 0.0.0.0
