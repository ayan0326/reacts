import react, { useContext } from "react";
import { mainContext } from "./reducer";
import { FormattedMessage } from "react-intl";
import { ContextProvider } from "./reducer";
import Inter from "./locales/intl";

function View() {
  const { dispatch, state } = useContext(mainContext);
  const { locale } = state;

  const changeLang = () => {
    // 改变状态里的 语言 进行切换
    dispatch({
      type: "CHANGE_LOCALE",
      locale: locale === "zh" ? "en" : "zh",
    });
  };

  return (
    <div>
      <div>
        <FormattedMessage id="start"></FormattedMessage>
      </div>
      <div>
        <button onClick={changeLang}>
          <FormattedMessage id="switch"></FormattedMessage>
        </button>
      </div>
    </div>
  );
}
export default View;
