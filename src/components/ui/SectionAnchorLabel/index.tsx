import MenuIcon from '../../icons/MenuIcon';

type Props = {
  children: string;
};

const SectionAnchorLabel = ({ children }: Props) => (
  <div className="relative flex items-center h-[32px]">
    <div className="absolute left-[-22px] top-1/2 -translate-y-1/2">
      <MenuIcon size={20} />
    </div>
    <p className="text-[17px] tracking-[0.5px] flex items-center">{children}</p>
  </div>
);

export default SectionAnchorLabel;
