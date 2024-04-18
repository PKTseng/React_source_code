import React, { useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import {
  fetchWords,
  selectFilteredWords,
  selectWords,
  selectWordsError,
  selectWordsStatus,
  toggleRemembered,
  toggleRememberedWord,
} from "../../state/wordSlice";
import { useDispatch } from "react-redux";
import { selectedLanguage } from "../../state/settingsSlice";

function Words() {
  const words = useSelector(selectFilteredWords);
  const language = useSelector(selectedLanguage);

  const dispatch = useDispatch();

  const wordsStatus = useSelector(selectWordsStatus);
  const wordsError = useSelector(selectWordsError);

  useEffect(() => {
    if (wordsStatus === "idle") {
      dispatch(fetchWords());
    }
  }, [wordsStatus, dispatch]);

  if (wordsStatus === "loading") {
    return <div>加载中...</div>;
  }
  if (wordsStatus === "failed") {
    return <div>出现了错误！{wordsError}</div>;
  }

  return (
    <div className="words">
      {words.map((word) => (
        <div key={word.word} className="wordCard">
          <h3>{word.word}</h3>
          <p>{word.def}</p>
          <button
            onClick={() => dispatch(toggleRememberedWord({ word: word.word }))}
            className={`${
              word.remembered ? "remembered" : "unremembered"
            } wordStatus`}
          >
            {word.remembered ? "已记" : "未记"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Words;
