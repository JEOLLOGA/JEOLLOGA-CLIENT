import Tag from '@components/common/tag/Tag';

interface numberTagProps {
  currentNum: number;
  totalNum: number;
}

const NumberTag = ({ currentNum, totalNum }: numberTagProps) => {
  const numberString = `${currentNum}/${totalNum}`;
  return (
    <div>
      <Tag label={numberString} color="gray" />
    </div>
  );
};

export default NumberTag;
