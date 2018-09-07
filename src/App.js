import React, { Component } from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-bootstrap/dist/react-bootstrap';
import {Panel} from 'react-bootstrap';

import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import {AppBar, Toolbar,Typography,IconButton} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
class App extends Component {
  state ={ editorState: EditorState.createEmpty() }
  onChange = (editorState) => this.setState({editorState});
  render() {
  return (
    <div className="container-fluid">
 <div className="row">
 <div className="col-md-12">
        <AppBar position="static">
        <Toolbar> 
        <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>         
          <Typography variant="title" color="inherit">
            Standard Report Designer: Customization
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3">
      
      </div>
      <div className="col-md-9">
      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>Report Editor</Panel.Heading>
          <Panel.Body>
          <Editor
  
  editorState={this.state.editorState}
  wrapperClassName="wrapper-class"
  editorClassName="editor-content"
  toolbarClassName="toolbar-class"
  onEditorStateChange={this.onChange}
  // wrapperStyle={<wrapperStyleObject>}
  // editorStyle={<editorStyleObject>}
  // toolbarStyle={<toolbarStyleObject>}
  
  />
          </Panel.Body>
        </Panel>
  
  </div>   
  </div>
  </div>
  </ div>

  );
  }
  }
  
  export default App;
