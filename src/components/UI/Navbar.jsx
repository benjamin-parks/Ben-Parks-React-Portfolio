export default function Nav({ links }) {
    return (
        <nav style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
        }}>
              <ul style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "space-evenly",
                }}>
                {links.map((link, index) => (
                  <li style={{color: '#fff'}} key={index}>
                    {link}
                  </li>
                ))}
              </ul>
        </nav>
      );
    }
