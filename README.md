# React Signature Builder

## Table of Contents
+ [About](#about)
+ [Built With](#built_with)
+ [Getting Started](#getting_started)
+ [Usage](#usage)

## About <a name="about"></a>
This is an email signature builder built with React and inspired by [Hubspot's email signature builder](https://www.hubspot.com/email-signature-generator). This was built to better familiarize myself with React and its features, such as the Context API and Hooks.

The goal of this tool is to allow users to fill out the inputs in the left-side panel while seeing a preview of the signature update with their information as they enter it. They are then able to copy the HTML of their signature in a single click.

Users can also create a 'Collection' of different copy-able signatures. To do this they can click 'add to collection' in the 'collections' tab, make changes in any of the other tabs, then go back to 'collections' and add the new version to their collection. This could be used for creating signatures for a team without having to re-enter all of the information that would be the same on each one, such as the company address, logo, and accent colors.

## Built with <a name="built_with"></a>
+ ES6+
+ [React 16.8](https://reactjs.org/)
+ [Styled Components](https://www.styled-components.com/)

## Getting Started <a name="getting_started"></a>
```
git clone https://github.com/codyarose/react-email-signature-builder.git
cd react-email-signature-builder
npm i
npm start
```

## Example
[Signature example](http://htmlpreview.github.io/?https://raw.githubusercontent.com/codyarose/react-email-signature-builder/master/example.html)

## TODO
+ Connect to Firebase
