/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";

export class ErrorHandler extends Component {
  state = {
    renderError: null,
  };

  componentDidCatch(error: Error) {
    this.setState({ renderError: error });
  }

  render() {
    const { renderError } = this.state;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { children }: any = this.props;

    return renderError ? (
      <View className="flex-1 align-middle justify-center">
        <Text className="text-center">Something went wrong, try again</Text>
      </View>
    ) : (
      children
    );
  }
}
