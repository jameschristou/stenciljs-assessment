import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: false
})
export class MyComponent {
  @Prop() text: string;
  @Prop() placeholder: string;
  
  // private properties
  _actionsEl: Element;
  _savedTextValue: string;
  _inputEl: Element;

  // onChangeHandler = (evnt) => {
  //   setShowActionButtons(true);
  // }

  componentWillLoad(){
    this._savedTextValue = "Testing building web components with Stenciljs is fun!"
    this.text = this._savedTextValue;
  }

  componentDidLoad(){
    this._actionsEl = document.getElementById("actionsdiv");
    this._inputEl = document.getElementById("textinput");
  }

  onClickHandler = (evnt: MouseEvent) => {
    evnt.stopPropagation();
    // setDisplayText(value);

    console.log("clicked into text");

    this._actionsEl.classList.remove("hidden");
  }

  onCancelHandler = (evnt: MouseEvent) => {
    evnt.stopPropagation();
    // setShowActionButtons(false);
    this._inputEl.textContent = this._savedTextValue ? this._savedTextValue : this.placeholder;
    this._actionsEl.classList.add("hidden");
  }

  onSaveHandler = (evnt: MouseEvent) => {
    // setShowActionButtons(false);
    // updatedTextHandler(textField.current.innerText == placeholder ? "" : textField.current.innerText);
    console.log("Save event clicked");
    this._savedTextValue = this._inputEl.textContent;

    this._actionsEl.classList.add("hidden");

    // fire save event
  }

  render() {
    return (
      <div class="editableTextfieldContainer">
        <input type="text" id="textinput" class="editableTextfield" value={this.text} onClick={this.onClickHandler}/>
        <div id="actionsdiv" class="editableTextfieldActionsContainer hidden">
          <div class="editableTextfieldActions">
            <button id="saveBtn" class="editableTextfieldAction" tabindex="0" onClick={this.onSaveHandler}>
              <svg width="24" height="24" viewBox="1 -2 24 24" focusable="false" role="presentation">
                <path d="M6.735 12.322a1 1 0 0 0-1.47 1.356l3.612 3.919c.537.526 1.337.526 1.834.03l.364-.359a2335.638 2335.638 0 0 0 3.939-3.883l.04-.04a492.598 492.598 0 0 0 3.658-3.643 1 1 0 0 0-1.424-1.404 518.42 518.42 0 0 1-3.64 3.625l-.04.04a2049.114 2049.114 0 0 1-3.775 3.722l-3.098-3.363z"></path>
              </svg>
            </button>
            <button id="cancelBtn" class="editableTextfieldAction" tabindex="1" onClick={this.onCancelHandler}>
              <svg width="24" height="24" viewBox="1 -2 24 24" focusable="false" role="presentation">
                <path d="M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* <slot id="textslot" class="hidden"></slot> */}
      </div>
    );
  }
}