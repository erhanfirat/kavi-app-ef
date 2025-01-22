import * as React from "react";
import renderer from "react-test-renderer";
import IconButton from "../IconButton";

it(`Icon Button renders correctly`, () => {
  const tree = renderer
    .create(
      <IconButton
        title="search"
        icon="magnifyingglass"
        onPress={() => alert("merhaba!")}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
