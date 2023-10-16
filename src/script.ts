import {script} from '@digshare/script';

interface State {}

interface Params {
  version: string;
}

export default script<State, Params>(async (_state, {params: {version}}) => {
  return {
    message: {
      title: '部署成功',
      content: `当前版本 ${version}。`,
    },
  };
});
