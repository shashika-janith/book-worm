import './index.scss';

interface IProps {
  title: string;
}

const SectionHeader = (props: IProps) => {

  return (
    <div className="section-header">
      <p className="title">
        {props.title}
      </p>
    </div>
  );

}

export default SectionHeader;