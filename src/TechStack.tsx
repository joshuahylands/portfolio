import styles from './stack.module.scss';

function TechStack() {
  return (
    <aside className={styles.stack}>
      <div>
        <img src="/ts.svg" alt="Typescript Logo"/>
        <span>Typescript</span>
      </div>
      <div>
        <img src="/react.svg" alt="React Logo"/>
        <span>React</span>
      </div>
      <div>
        <img src="/sass.png" alt="Sass Logo"/>
        <span>Sass</span>
      </div>
      <div>
        <img src="/html5.svg" alt="HMTL5 Logo"/>
        <span>HTML</span>
      </div>
      <div>
        <img src="/nodejs.svg" alt="NodeJS Logo"/>
        <span>NodeJS</span>
      </div>
    </aside>
  );
}

export default TechStack;
