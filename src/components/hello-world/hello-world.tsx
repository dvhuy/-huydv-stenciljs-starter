import { Component } from '@stencil/core';

@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.css'
})
export class MySpinner {
  render() {
    return (
      <div class='hello-world'>
        Hello world!
      </div>
    );
  }
}
