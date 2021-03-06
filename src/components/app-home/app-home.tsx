import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
        <hello-world></hello-world>
        <stencil-route-link url='/profile/Huy Đoàn'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
