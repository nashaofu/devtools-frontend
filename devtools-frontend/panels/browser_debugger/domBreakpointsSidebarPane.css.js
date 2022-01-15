// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.breakpoint-list {
  padding-bottom: 3px;
}

.breakpoint-list .dom-breakpoint > div {
  overflow: hidden;
  text-overflow: ellipsis;
}

.breakpoint-entry {
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 2px 0;
}

.breakpoint-entry:focus-visible {
  background-color: var(--legacy-focus-bg-color);
}

.breakpoint-list .breakpoint-entry:hover {
  background-color: var(--color-background-elevation-2);
}

.breakpoint-hit {
  background-color: var(--color-background-elevation-2);
  border-right: 3px solid var(--color-details-hairline);
  color: var(--color-text-primary);
}

@media (forced-colors: active) {
  .breakpoint-entry:focus-visible,
  .breakpoint-list .breakpoint-entry:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .breakpoint-entry:focus-visible *,
  .breakpoint-list .breakpoint-entry:hover * {
    color: HighlightText;
  }
}

/*# sourceURL=domBreakpointsSidebarPane.css */
`);
export default styles;
