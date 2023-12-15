type Props = {
  className: string;
  src: string;
};

function CustomIcon({ className, src }: Props) {
  return (
    // <img src={src} className={className}/>
    <svg></svg>
  );
}

export default CustomIcon;
