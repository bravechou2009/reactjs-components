import React from 'react';

import SidePanel from '../../../src/SidePanel/SidePanel.js';

class SidePanelExample extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  // In order to use a panel, have an interaction that changes
  // `open` to true.
  handlePanelOpen() {
    this.setState({panelIsOpen: true});
  }

  // Pass the panel a function that will allow itself to close, by
  // setting `open` to false.
  handlePanelClose() {
    this.setState({panelIsOpen: false});
  }

  getHeader() {
    return [
      <div
        key="header-actions-primary"
        className="side-panel-header-actions side-panel-header-actions-primary">
        <button
          className="side-panel-header-action button button-stroke
            button-rounded"
          onClick={this.handlePanelClose.bind(this)}>
          ✕
        </button>
      </div>,
      <div
        key="header-content"
        className="side-panel-header-content">
        <h3 className="side-panel-header-content-title text-align-center flush">
          Side Panel
        </h3>
        <p
          className="side-panel-header-content-subtitle text-align-center flush">
          This is a subheader
        </p>
      </div>,
      <div
        key="header-actions-secondary"
        className="
          side-panel-header-actions
          side-panel-header-actions-secondary"
        >
      </div>
    ];
  }

  render() {
    return (
      <div className="row canvas-pod">
        <div className="container container-pod">
          <h2 className="short-bottom">Side panels</h2>
          <p>
            A side panel component that is hidden until opened by interaction. Can be used for showing things that are useful only at certain times, such as a settings sidebar or specific item information.
          </p>
          <p>
            View component source <a href="https://github.com/mesosphere/reactjs-components/blob/master/src/SidePanel/SidePanelContents.js">here</a>.
            View full example source <a href="https://github.com/mesosphere/reactjs-components/blob/master/docs/src/SidePanel/index.js">here</a>.
          </p>
            <h3>Properties API</h3>
            <div className="example-block">
              <div className="example-block-footer example-block-footer-codeblock">
                <pre className="prettyprint linenums flush-bottom">
{`SidePanelContents.propTypes = {
  // Nodes to render inside of side panel.
  children: PropTypes.node,
  // Set to false to disable the backdrop click listener for close.
  closeByBackdropClick: PropTypes.bool,
  // Node to render for header.
  header: PropTypes.node,
  // Function to call on close.
  onClose: PropTypes.func,
  // Bool that states if side panel is open or not.
  open: PropTypes.bool,

  // Classes.
  backdropClass: PropTypes.string,
  bodyClass: PropTypes.string,
  containerClass: PropTypes.string,
  headerClass: PropTypes.string,
  headerContainerClass: PropTypes.string,
  sidePanelClass: PropTypes.string
};`}
                </pre>
              </div>
            </div>
          <div className="example-block flush-bottom">
            <div className="example-block-content">
              <section className="row canvas-pod">
                <div className="column-12">
                  <p>
                    The panel will pop out from the side; thus, the side panel.
                  </p>
                  <button
                    className="button button-inverse"
                    onClick={this.handlePanelOpen.bind(this)}>
                    Open side panel
                  </button>
                </div>
              </section>
            </div>
            <div className="example-block-footer example-block-footer-codeblock">
              <pre className="prettyprint linenums flush-bottom">
{`
getHeader() {
  return (
    <div>
      <button className="button button-stroke button-rounded"
        onClick={this.handlePanelClose.bind(this)}>
        ✕
      </button>
      <h2 className="side-panel-header-title text-align-center flush-top flush-bottom">
        Side Panel
      </h2>
      <p className="center">Subheader</p>
    </div>
  );
}

// In order to use a panel, have an interaction that changes
// \`open\` to true.
handlePanelOpen() {
  this.setState({panelIsOpen: true});
}

// Pass the panel a function that will allow itself to close, by
// setting \`open\` to false.
handlePanelClose() {
  this.setState({panelIsOpen: false});
}

//...

<SidePanel
  header={this.getHeader()}
  open={this.state.panelIsOpen}
  onClose={this.handlePanelClose.bind(this)}>
  <div>
    <p className="container-pod container-pod-short flush-bottom">
      This side panel will scroll vertically, but not horizontally.
    </p>
    <p className="container-pod container-pod-short flush-bottom">
      Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim ...
    </p>
    <p className="container-pod container-pod-short flush-bottom">
      Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim ...
    </p>
    <p className="container-pod container-pod-short flush-bottom">
      Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim ...
    </p>
    <p className="container-pod container-pod-short flush-bottom">
      Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim ...
    </p>
    <p className="container-pod container-pod-short flush-bottom">
      Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim ...
    </p>
  </div>
</SidePanel>`}
              </pre>
            </div>
          </div>
        </div>

        <SidePanel header={this.getHeader()}
          open={this.state.panelIsOpen}
          onClose={this.handlePanelClose.bind(this)}>
          <div className="container container-fluid container-pod">
            <p>
              This side panel will scroll vertically, but not horizontally.
            </p>
            <p>
              Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim tristique, dignissim varius sem placeratSed molestie purus vitae hendrerit congue. Aliquam viverra cursus odio a ullamcorper.Curabitur venenatis ex quis volutpat suscipit. Nulla ante purus, laoreet vel fermentum vitae, sollicitudin nec erat.Proin venenatis libero sodales, dictum augue non, pretium dolor
            </p>
            <p>
              Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim tristique, dignissim varius sem placeratSed molestie purus vitae hendrerit congue. Aliquam viverra cursus odio a ullamcorper.Curabitur venenatis ex quis volutpat suscipit. Nulla ante purus, laoreet vel fermentum vitae, sollicitudin nec erat.Proin venenatis libero sodales, dictum augue non, pretium dolor
            </p>
            <p>
              Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim tristique, dignissim varius sem placeratSed molestie purus vitae hendrerit congue. Aliquam viverra cursus odio a ullamcorper.Curabitur venenatis ex quis volutpat suscipit. Nulla ante purus, laoreet vel fermentum vitae, sollicitudin nec erat.Proin venenatis libero sodales, dictum augue non, pretium dolor
            </p>
            <p>
              Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim tristique, dignissim varius sem placeratSed molestie purus vitae hendrerit congue. Aliquam viverra cursus odio a ullamcorper.Curabitur venenatis ex quis volutpat suscipit. Nulla ante purus, laoreet vel fermentum vitae, sollicitudin nec erat.Proin venenatis libero sodales, dictum augue non, pretium dolor
            </p>
            <p className="flush-bottom">
              Fusce sed nibh luctus, ultricies urna eget, eleifend lectus. Etiam sagittis mauris et enim tristique, dignissim varius sem placeratSed molestie purus vitae hendrerit congue. Aliquam viverra cursus odio a ullamcorper.Curabitur venenatis ex quis volutpat suscipit. Nulla ante purus, laoreet vel fermentum vitae, sollicitudin nec erat.Proin venenatis libero sodales, dictum augue non, pretium dolor
            </p>
          </div>
        </SidePanel>
      </div>
    );
  }

}

React.render(<SidePanelExample />, document.getElementById('side-panel'));
