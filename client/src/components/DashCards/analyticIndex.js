import React, { Component } from 'react';
import { GoogleProvider, GoogleDataChart } from 'react-analytics-widget'

// graph 1 config
const CLIENT_ID = '726286302472-hu85kemqt9359brkprckvgkotqjcm4s3.apps.googleusercontent.com';

// graph 1 config
const last30days = {
  reportType: "ga",
  query: {
    dimensions: "ga:date",
    metrics: "ga:pageviews",
    "start-date": "30daysAgo",
    "end-date": "yesterday"
  },
  chart: {
    type: "LINE",
    options: {
      // options for google charts
      // https://google-developers.appspot.com/chart/interactive/docs/gallery
      title: "Last 30 days pageviews"
    }
  }
}

// graph 2 config
const last7days = {
  reportType: "ga",
  query: {
    dimensions: "ga:date",
    metrics: "ga:pageviews",
    "start-date": "7daysAgo",
    "end-date": "yesterday"
  },
  chart: {
    type: "LINE"
  }
}

// analytics views ID
const views = {
  query: {
    ids: "ga:189848989"
  }
}

const Example = () => (
    
        
  <GoogleProvider clientId={CLIENT_ID}>
    <GoogleDataChart views={views} config={last30days} />
    <GoogleDataChart views={views} config={last7days} />
  </GoogleProvider>
  
    )



export default Example