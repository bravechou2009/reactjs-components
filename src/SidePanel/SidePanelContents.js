import classNames from 'classnames';
import GeminiScrollbar from 'react-gemini-scrollbar';
/* eslint-disable no-unused-vars */
import React, {PropTypes} from 'react';
/* eslint-enable no-unused-vars */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BindMixin from '../Mixin/BindMixin';
import Util from '../Util/Util';

class SidePanelContents extends Util.mixin(BindMixin) {
  get methodsToBind() {
    return [
      'handleBackdropClick',
      'closeSidePanel'
    ];
  }

  componentWillReceiveProps(newProps) {
    super.componentWillReceiveProps(...arguments);

    if (this.props.open !== newProps.open) {
      document.body.classList.toggle('no-overflow');
    }
  }

  componentDidMount() {
    super.componentDidMount(...arguments);
    this.checkRerendered();
  }

  componentDidUpdate() {
    super.componentDidUpdate(...arguments);
    this.checkRerendered();
  }

  checkRerendered() {
    let open = this.props.open;
    if (open && !this.rerendered) {
      // Trigger another render on first render cycle
      this.rerendered = true;
      this.forceUpdate();
    } else if (!open) {
      // Reset rerendered whenever we want to close
      this.rerendered = false;
    }
  }

  closeSidePanel(closeInfo) {
    this.props.onClose(closeInfo);
  }

  handleBackdropClick() {
    if (this.props.closeByBackdropClick) {
      this.closeSidePanel({closedByBackdrop: true});
    }
  }

  getBackdrop() {
    let props = this.props;

    if (!props.open) {
      return null;
    }

    return (
      <div
        className={props.backdropClass}
        onClick={this.handleBackdropClick}>
      </div>
    );
  }

  getHeader() {
    let props = this.props;

    if (props.header == null) {
      return null;
    }

    return (
      <div className={props.headerClass}>
        <div className={props.headerContainerClass}>
          {props.header}
        </div>
      </div>
    );
  }

  getContents() {
    let props = this.props;

    if (!props.open) {
      return null;
    }

    let contents = (
      <div className={props.bodyClass}>
        {props.children}
      </div>
    );

    if (this.rerendered) {
      // Wrap in scrollbar after first render
      contents = (
        <GeminiScrollbar
          autoshow={true}
          className={props.bodyClass}>
          {props.children}
        </GeminiScrollbar>
      );
    }

    return (
      <div className={props.sidePanelClass}>
        {this.getHeader()}
        {contents}
      </div>
    );
  }

  render() {
    let props = this.props;

    let classes = classNames(props.containerClass, props.className);

    return (
      <div className={classes}>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionName="side-panel-fade-in"
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="div">
          {this.getBackdrop()}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionName="side-panel-slide-left"
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="div">
          {this.getContents()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}

SidePanelContents.defaultProps = {
  closeByBackdropClick: true,
  header: null,
  onClose: () => {},
  open: false,

  // Classes
  backdropClass: 'side-panel-backdrop',
  bodyClass: 'side-panel-content container-scrollable',
  containerClass: 'side-panel-container',
  headerClass: 'side-panel-header',
  headerContainerClass: 'side-panel-header-container container container-fluid container-fluid-narrow container-pod container-pod-short',
  sidePanelClass: 'side-panel side-panel-large flex-container-col container container-pod container-pod-short flush-top flush-bottom'
};

SidePanelContents.propTypes = {
  // Nodes to render inside of side panel.
  children: PropTypes.node,
  // Set to false to disable the backdrop click listener for close.
  // Default: true
  closeByBackdropClick: PropTypes.bool,
  // Node to render for header. Default: null
  header: PropTypes.node,
  // Function to call on close.
  onClose: PropTypes.func,
  // Bool that states if side panel is open or not. Default: false
  open: PropTypes.bool,

  // Classes.
  backdropClass: PropTypes.string,
  bodyClass: PropTypes.string,
  containerClass: PropTypes.string,
  headerClass: PropTypes.string,
  headerContainerClass: PropTypes.string,
  sidePanelClass: PropTypes.string
};

module.exports = SidePanelContents;
