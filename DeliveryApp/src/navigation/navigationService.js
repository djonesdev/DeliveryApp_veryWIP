import * as React from 'react';

// Reasoning for a navigation service is for usage with Sagas and we can decided on navigation based on api response

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}