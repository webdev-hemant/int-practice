import { NextPage } from 'next';
import { withProtected } from 'src/hook/route';

interface IProps {
  auth: any;
}

const ProductPage: NextPage<IProps> = (props) => {
  const { auth } = props;
  console.log({ auth });

  return <div>ProductPage</div>;
};

export default withProtected(ProductPage);
