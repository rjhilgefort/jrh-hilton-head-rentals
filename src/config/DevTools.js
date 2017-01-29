import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import Inspector from 'redux-devtools-inspector';

const DevTools = createDevTools(
  <DockMonitor
      defaultPosition="right"
      changePositionKey="ctrl-p"
      defaultIsVisible={false}
      toggleVisibilityKey="ctrl-v"
      changeMonitorKey="ctrl-m">
    <LogMonitor
        theme="tomorrow"
        preserveScrollTop={false}
        expandActionRoot={true}
        expandStateRoot={true}
        markStateDiff={true} /* Expensive */
    />
    <Inspector theme="tomorrow-night" invertTheme={false} />
  </DockMonitor>,
);

export default DevTools;
