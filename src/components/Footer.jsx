export default function Footer() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
    }}>
      <ul style={{
        display: 'flex',
        listStyle: 'none', 
        justifyContent: 'space-evenly',
      }}>
        <li><a href="https://www.linkedin.com/in/ben-parks-a8b04b214/" style={{ color: '#fff' }}>LinkedIn</a></li>
        <li><a href="https://github.com/benjamin-parks" style={{ color: '#fff' }}>Github</a></li>
        <li><a href="https://x.com/BunMunKun" style={{ color: '#fff' }}>X (formerly known as twitter)</a></li>
      </ul>
    </div>
  );
}
