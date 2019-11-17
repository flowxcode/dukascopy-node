const input = {
  data: require('./../sample_m1_data.json'),
  fromTimeframe: 'm1',
  toTimeframe: 'h1',
  priceType: 'bid'
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.14597, 1.14529, 1.14555, 8461.16],
  [1549242000000, 1.14555, 1.1459, 1.1454, 1.14581, 6976.12],
  [1549245600000, 1.14582, 1.14603, 1.14529, 1.14534, 6508.71],
  [1549249200000, 1.14535, 1.14545, 1.14461, 1.14484, 7484.6],
  [1549252800000, 1.14485, 1.14491, 1.14412, 1.14424, 7980.63],
  [1549256400000, 1.14424, 1.14461, 1.14424, 1.14434, 6174],
  [1549260000000, 1.14436, 1.14444, 1.14395, 1.14442, 8094.88],
  [1549263600000, 1.14441, 1.14453, 1.14379, 1.14424, 17706.22],
  [1549267200000, 1.14425, 1.14533, 1.14386, 1.14508, 27671.73],
  [1549270800000, 1.14509, 1.14534, 1.1444, 1.14453, 25673.53],
  [1549274400000, 1.14452, 1.14482, 1.14406, 1.14465, 24749.89],
  [1549278000000, 1.14466, 1.14542, 1.14449, 1.14518, 20980.8],
  [1549281600000, 1.14518, 1.14526, 1.14413, 1.14477, 21617.21],
  [1549285200000, 1.14475, 1.14511, 1.14429, 1.14488, 21869.2],
  [1549288800000, 1.14488, 1.14504, 1.14248, 1.14262, 27261.39],
  [1549292400000, 1.14263, 1.14375, 1.14254, 1.14287, 28460.93],
  [1549296000000, 1.14286, 1.14378, 1.14244, 1.14376, 24519.39],
  [1549299600000, 1.14376, 1.14399, 1.14296, 1.14312, 18367.64],
  [1549303200000, 1.14312, 1.14347, 1.14264, 1.14322, 16084.67],
  [1549306800000, 1.14321, 1.14357, 1.14305, 1.14312, 13005.23],
  [1549310400000, 1.14311, 1.1435, 1.14311, 1.14343, 13736.44],
  [1549314000000, 1.14344, 1.14372, 1.14335, 1.14353, 4759.68],
  [1549317600000, 1.14353, 1.14375, 1.14343, 1.1435, 3163.15],
  [1549321200000, 1.14352, 1.14385, 1.14344, 1.14349, 5834.78]
];

export { input, expectedOutput };
