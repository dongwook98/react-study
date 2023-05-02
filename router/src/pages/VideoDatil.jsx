import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDatil() {
  const { videoId } = useParams(); // 구조분해
  console.log(videoId);
  return <div>VideoDetail {videoId}</div>;
}
