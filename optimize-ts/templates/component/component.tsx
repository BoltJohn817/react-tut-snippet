/*
Component: src/component/TemplateName/TemplateName.tsx
*/

import React from 'react'
import './TemplateName.scss'
import { RouteComponentProps } from 'react-router-dom'

export default class TemplateName extends React.Component<ITemplateNameProps, ITemplateNameState> {
  constructor(props: ITemplateNameProps) {
    super(props)
    this.state = {
      name: this.props.history.location.pathname
        .substring(1, this.props.history.location.pathname.length)
        .replace('/', ''),
    }
  }

  // Read more about component lifecycle in the official docs:
  // https://reactjs.org/docs/react-component.html

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<
    ITemplateNameProps,
    ITemplateNameState
  > = (props: ITemplateNameProps, state: ITemplateNameState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public shouldComponentUpdate(nextProps: ITemplateNameProps, nextState: ITemplateNameState) {
    // invoked before rendering when new props or state are being received.
    return true // or prevent rendering: false
  }

  public getSnapshotBeforeUpdate(prevProps: ITemplateNameProps, prevState: ITemplateNameState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(
    prevProps: ITemplateNameProps,
    prevState: ITemplateNameState,
    snapshot: ITemplateNameSnapshot
  ) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    return <div className="TemplateName">{this.state.name} Component</div>
  }
}

interface ITemplateNameProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface ITemplateNameState {
  name: string
}

interface ITemplateNameSnapshot {
  // TODO
}
