//これは"actionCreators"という書き方
//dispatch に関数を書くのを省略するための関数

export const plus = num => {
    return { type: "PLUS", payload: {num: num} };
};

export const minus = num => {
    return { type: "MINUS", payload: {num: num} };
};

