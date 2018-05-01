import React, { Component } from 'react';
import StudentTable from "./studentTable";
import StudentForm from "./studentForm";
import StudentRow from "./studentRow";

import * as model from './Model';

export default class App extends Component { 
  constructor() {
    super();
    this.state = {
      studentList: model.getAllStudents(),
      student: null,
      showForm: false
    }
    
    this._onCreateBtnClicked = this._onCreateBtnClicked.bind(this);
    this._onCancelBtnClicked = this._onCancelBtnClicked.bind(this);
    this._onEditBtnClicked = this._onEditBtnClicked.bind(this);
    this._onDeleteBtnClicked = this._onDeleteBtnClicked.bind(this);

    this._onCreateConfirmed = this._onCreateConfirmed.bind(this);
    this._onEditConfirmed = this._onEditConfirmed.bind(this);
  }
  _onCreateBtnClicked() {
    this.setState({
      student: null,
      showForm: true
    })
  }

  _onEditBtnClicked(student) {
    this.setState({
      student,
      showForm: true
    })
  }

  _onDeleteBtnClicked(student) {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm(
      `are you sure you want to delete ${student.sortableName()}?`)) {
      return;
    }
    if (model.deleteStudent(student.id)) {
      this.setState({
        studentList: model.getAllStudents()
      });
    }
  }

  _onCancelBtnClicked() {
    this.setState({
      showForm: false
    });
  }

  _onCreateConfirmed(id, firstName, lastName, isMale, uvuId, race, age, isVeteran) {
    if (model.createStudent(firstName, lastName, isMale, uvuId, race, age, isVeteran)) {
      this.setState({
        student: null,
        showForm: false,
        studentList: model.getAllStudents()
      });
    }
  }

  _onEditConfirmed(id, firstName, lastName, isMale, uvuId, race, age, isVeteran) {
    if (model.updateStudent(id, firstName, lastName, isMale, uvuId, race, age, isVeteran)) {
      this.setState({
        student: null,
        showForm: false,
        studentList: model.getAllStudents()
      });
    }
  }

  render() {
    let content;
    if (this.state.showForm) {
      if (this.state.student) {
        content = <StudentForm
          student={this.state.student}
          onSubmit={this._onEditConfirmed}
          onCancelBtnClicked={this._onCancelBtnClicked} />
      }
      else {
        content = <StudentForm
          onSubmit={this._onCreateConfirmed}
          onCancelBtnClicked={this._onCancelBtnClicked} />
        
      }
    } else {
      content = <StudentTable
        studentList={this.state.studentList}
        onCreateBtnClicked={this._onCreateBtnClicked}
        onEditBtnClicked={this._onEditBtnClicked}
        onDeleteBtnClicked={this._onDeleteBtnClicked} />
    }

    return (
      <div className = "container">
      {content}
      </div>
    );
  }
}

//export default App; //This line gave an error saying "Syntax error: Only one default export allowed per module. (34:0)"
