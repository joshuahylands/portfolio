import { PropsWithChildren } from 'react';

import styles from './badge.module.scss';

type BadgeProps = {
  color: string;
};

function Badge(props: PropsWithChildren<BadgeProps>) {
  return <span className={styles.badge} style={{ color: props.color, borderColor: props.color }}>{props.children}</span>;
}

export default Badge;
