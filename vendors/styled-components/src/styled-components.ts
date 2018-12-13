// Before you can effectively start to use TypeScript
// you will have to do a little bit of configuration.
// Source: https://www.styled-components.com/docs/api#typescript
// styled-components.ts
import * as styledComponents from "styled-components";
import {Theme} from "./theme";

// import styled from '@bullgit/styled-components';
// const Title = styled.h1`
//   color: ${props => props.theme.colors.light};
// `;

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {styled, css, createGlobalStyle, keyframes, ThemeProvider};
