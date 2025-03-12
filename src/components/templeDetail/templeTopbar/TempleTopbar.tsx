import PageName from '@components/common/pageName/PageName';

interface TempleTopbarProps {
  templeName: string;
  templestayName: string;
}

const TempleTopbar = ({ templeName, templestayName }: TempleTopbarProps) => {
  return (
    <div>
      <PageName title={`${templeName} ${templestayName}`} />
    </div>
  );
};

export default TempleTopbar;
