function Load({ linkedin, img, nome, cargo, email }) {
  return (
    <div style={{ margin: "0" }}>
      <br />
      <div
        style={{ margin: "0", padding: "0", backgroundColor: "#ffffff" }}
        height="100%"
      >
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            fontFamily: "Arial, Helvetica Neue, Helvetica, sans-serif",
            fontSize: "14px",
            color: "#0166b3",
          }}
        >
          <tbody>
            <tr>
              <td style={{ lineHeight: "0" }}>
                <a
                  href={
                    linkedin || "https://www.linkedin.com/company/futurotec/"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img} height="169px" alt="" />
                </a>
              </td>
              <td style={{ paddingLeft: "2rem" }}>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <p
                            style={{
                              margin: "0",
                              fontFamily:
                                "Helvetica Neue, Helvetica, Arialsans-serif",
                              fontWeight: "bold",
                              fontSize: "16px",
                            }}
                          >
                            {nome}
                          </p>
                          <p
                            style={{
                              margin: "0",
                              fontWeight: "bold",
                              marginTop: "2px",
                              color: "#aeb3b6",
                            }}
                          >
                            {cargo}
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div
                          style={{
                            height: "1px",
                            display: "block",
                            margin: "5px 0",
                            backgroundColor: "#e3e3e3",
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  lineHeight: "0",
                                  padding: "2px 8px 2px 0",
                                }}
                              >
                                <a
                                  href={`mailto:${email}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    height="18px"
                                    src="https://ci6.googleusercontent.com/proxy/Sq959R11HI0ZUsTR6qd3YT2c5gbjcdxy2Qea3zlMto3BhaYVJDnMVtPu-tuhlMVLNs4=s0-d-e1-ft#https://i.imgur.com/6mnsPfV.png"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td style={{ textDecoration: "none" }}>
                                <a
                                  href={`mailto:${email}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "#0166b3",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {email}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  lineHeight: "0",
                                  padding: "2px 8px 2px 0",
                                }}
                              >
                                <img
                                  height="18px"
                                  src="https://ci5.googleusercontent.com/proxy/yWuS3PtBi1xFH_wXl9Mwnt1tDlFiH0I84RIZPwHn-edQZyAKNqutN9nd3eSvq-S0-cw=s0-d-e1-ft#https://i.imgur.com/5bxlmJ4.png"
                                  alt=""
                                />
                              </td>
                              <td>
                                <span>+55 (31) 3801-6805</span>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  lineHeight: "0",
                                  padding: "2px 8px 2px 0",
                                }}
                              >
                                <a
                                  href="https://www.google.com/url?q=http://www.futurotec.com.br&amp;source=gmail-html&amp;ust=1643135053304000&amp;usg=AOvVaw2M9jhh2v8bfat-J3cG2AnD"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    height="18px"
                                    src="https://ci4.googleusercontent.com/proxy/UcA4V1ReBiLIagpXeJg6t3matyvyAcEvbDV7jxIpr9q_peFeVyoxzlRiYA7LVBDApvw=s0-d-e1-ft#https://i.imgur.com/VqNRyEt.png"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td style={{ textDecoration: "none" }}>
                                <a
                                  href="https://www.google.com/url?q=http://www.futurotec.com.br&amp;source=gmail-html&amp;ust=1643135053304000&amp;usg=AOvVaw2M9jhh2v8bfat-J3cG2AnD"
                                  style={{
                                    textDecoration: "none",
                                    color: "#0166b3",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  www.futurotec.com.br
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div
                          style={{
                            height: "1px",
                            display: "block",
                            margin: "5px 0",
                            backgroundColor: "#e3e3e3",
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td style={{ lineHeight: "0" }}>
                                <a
                                  href="https://www.google.com/url?q=http://www.futurotec.com.br&amp;source=gmail-html&amp;ust=1643135053304000&amp;usg=AOvVaw2M9jhh2v8bfat-J3cG2AnD"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src="https://ci5.googleusercontent.com/proxy/ShSFnila4AT_Z8SXFK9GMM1nwNP3oVmxXFsODQJXWbeLIYHYPyNwH6dB3n-99i5TAHc=s0-d-e1-ft#https://i.imgur.com/H16YHZV.jpg"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <div
                                  style={{
                                    width: "1px",
                                    height: "14px",
                                    display: "block",
                                    margin: "0 15px",
                                    backgroundColor: "#e3e3e3",
                                  }}
                                ></div>
                              </td>
                              <td>
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{ borderCollapse: "collapse" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          lineHeight: "0",
                                          paddingRight: "5px",
                                        }}
                                      >
                                        <a
                                          href="https://www.google.com/url?q=https://api.whatsapp.com/send?phone%3D553138016805&amp;source=gmail-html&amp;ust=1643135053304000&amp;usg=AOvVaw1AAdp8gMHV6dhNrez27Nh7"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://ci4.googleusercontent.com/proxy/xXq8IA-WFlmLsa5iOVaBPl9V9FO1oDoPkbWjo1gsP8tOprdekubbBSzHzsjMrtTjUNs=s0-d-e1-ft#https://i.imgur.com/eXrbs2y.png"
                                            height="14px"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          lineHeight: "0",
                                          paddingRight: "5px",
                                        }}
                                      >
                                        <a
                                          href="https://www.google.com/url?q=https://www.facebook.com/futurotec2007/&amp;source=gmail-html&amp;ust=1643135053304000&amp;usg=AOvVaw2f7IZz_5Qomv94r9KINTip"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://ci6.googleusercontent.com/proxy/nk3vX0mBfhUIUfS1tCS7sn2BNocC-JUYgDUXrAFNvoeMNeTkfNSdW93jgsHzQTMEBT0=s0-d-e1-ft#https://i.imgur.com/fK4Ows9.png"
                                            height="14px"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          lineHeight: "0",
                                          paddingRight: "5px",
                                        }}
                                      >
                                        <a
                                          href="https://www.google.com/url?q=https://www.instagram.com/futuro.tec/&amp;source=gmail-html&amp;ust=1643135053304000&amp;usg=AOvVaw0SEDB8HxL5Py62UyDySj0K"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://ci3.googleusercontent.com/proxy/UJ0oWEtnolJedzQv-KCa6wwYuDba6aqIyPe46Yso8UpwC2d4HVwWaG8HF6IijimkJY4=s0-d-e1-ft#https://i.imgur.com/t70DCEC.png"
                                            height="14px"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td style={{ lineHeight: "0" }}>
                                        <a
                                          href="https://www.google.com/url?q=https://www.linkedin.com/company/futurotec&amp;source=gmail-html&amp;ust=1643135053304000&amp;usg=AOvVaw1KuNtzQs5yQOknX3k0gp0G"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://ci4.googleusercontent.com/proxy/l-Z3rUsK5fv6GH5wsmOJ8FdMDT7gWPvMwGROFYdKmKkGbkeRF8xfdiaOzeQRhTZijh4=s0-d-e1-ft#https://i.imgur.com/tXexQhK.png"
                                            height="14px"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Load;
