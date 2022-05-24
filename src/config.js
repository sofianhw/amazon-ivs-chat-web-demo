// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/* eslint-disable */

// Amazon IVS Playback URL
// Replace this with your own Amazon IVS Playback URL
export const PLAYBACK_URL = "https://693db92784cb.ap-northeast-1.playback.live-video.net/api/video/v1/ap-northeast-1.647709804557.channel.BzmrZMog0aem.m3u8";

// Chat websocket address
// The websocket endpoint for the chat room: wss://edge.ivschat.<AWS_REGION>.amazonaws.com
export const CHAT_WEBSOCKET = "wss://edge.ivschat.us-east-1.amazonaws.com";

// Chat API URL
// The Amazon IVS Chat backend endpoint. You must deploy the serverless backend to get this value.
export const API_URL = "https://ul4vj6690l.execute-api.us-east-1.amazonaws.com/Prod";

// Chat room id (ARN)
export const CHAT_ROOM_ID = "arn:aws:ivschat:us-east-1:647709804557:room/VkQ1Vh2l2tiw";

// Token duration in minutes
// Values between 1 and 180 are supported.
export const TOKEN_EXPIRATION_IN_MINUTES = 55;

// Token refresh delay
// This client app will attempt to obtain a new token for the user 0.5 minutes
// before it expires.
export const TOKEN_REFRESH_IN_MINUTES = TOKEN_EXPIRATION_IN_MINUTES - 0.5;
