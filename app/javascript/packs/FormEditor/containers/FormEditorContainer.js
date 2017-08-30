import { connect } from 'react-redux';
import FormEditor from '../components/FormEditor';

const mapStateToProps = state => ({ form: state.form });

const mapDispatchToProps = () => ({});

const FormEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormEditor);

export default FormEditorContainer;
