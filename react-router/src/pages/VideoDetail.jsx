import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams(); // useParams로 params 객체를 받을 수 있음
  console.log(videoId);
  return <div>VideoDetail {videoId}</div>;
}
