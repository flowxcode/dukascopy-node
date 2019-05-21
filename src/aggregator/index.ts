import { HistoryConfig } from './../config/types';

import { splitArrayInChunks } from './../utils';

function getOHLC(input: number[][]) {
  // ignoring 0 volumes
  input = input.filter(data => data[5] !== 0);

  if (input.length === 0) {
    return input;
  }

  let ts = input[0][0];
  let open = input[0][1];
  let high = input[0][2];
  let low = input[0][3];
  let close = input[input.length - 1][4];
  let volume = input[0][5];

  for (let i = 1, n = input.length; i < n; i++) {
    const [, , h, l, , v] = input[i];

    if (h > high) {
      high = h;
    }

    if (l < low) {
      low = l;
    }

    if (v !== undefined) {
      volume += v;
    }
  }

  return [ts, open, high, low, close, volume];
}

function transformToTimefrmes(input: number[][][], timeframe: HistoryConfig['timeframe']) {
  if (timeframe === 'tick' || timeframe === 'm1' || timeframe === 'h1') {
    return input;
  }

  if (timeframe === 'm30') {
    return input.map(t => splitArrayInChunks(t, 30).map(getOHLC));
  }

  if (timeframe === 'd1') {
    return input.map(t => splitArrayInChunks(t, 24).map(getOHLC));
  }

  if (timeframe === 'mn1') {
    return input.map(t => [getOHLC(t)]);
  }
}

function aggregate(
  parsedData: number[][][],
  startDate: Date,
  endDate: Date,
  timeframe: HistoryConfig['timeframe']
) {
  const [startMs, endMs] = [startDate, endDate].map(d => +d);

  const sorted = parsedData.filter(arr => arr.length > 0).sort((a, b) => a[0][0] - b[0][0]);

  const transformed = transformToTimefrmes(sorted, timeframe);

  const merged = <number[][]>[].concat(...transformed);

  const filtered = merged.filter(([timestamp]) => timestamp >= startMs && timestamp < endMs);

  return filtered;
}

export { aggregate };