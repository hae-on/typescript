import { BaseComponent } from "./../../component.js";

export class MediaSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
            <div class="form__container">
            <lable for="title">Title</lable>
            <input type="text" id="title" />
            </div>
            <div class="form__container">
            <lable for="url">URL</lable>
            <input type="text" id="url" />
            </div>
        </div>`);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
