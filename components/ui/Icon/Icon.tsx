type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}

//використання
{
  /* <Icon name="icon-facebook" className={styles.socialIcon} />; */
}
