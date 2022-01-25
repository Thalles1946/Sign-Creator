import { useRef } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  nome: yup.string("Informe o nome"), // .required("O campo é obrigatório"),
  cargo: yup.string("Informe o cargo"), // .required("O campo é obrigatório"),
  linkedin: yup.string("Informe o link para o Linkedin"),
  imagem: yup
    .string("Informe a url da imagem")
    .required("O campo é obrigatório"),
  email: yup.string("Informe o e-mail").email("Informe um e-mail válido"), // .required("O campo é obrigatório"),
});

function App() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  const formik = useFormik({
    initialValues: {
      nome: "",
      cargo: "",
      linkedin: "",
      imagem: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoaded(true);
    },
  });

  const assinatura = (
    <div ref={ref} style={{ margin: "0" }}>
      <br />
      <div
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: "#ffffff",
        }}
        height="100%"
      >
        <table
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
                    formik.values.linkedin ||
                    "https://www.linkedin.com/company/futurotec/"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={formik.values.imagem} height="169px" alt="" />
                </a>
              </td>
              <td style={{ paddingLeft: "2rem" }}>
                <table>
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
                            {formik.values.nome}
                          </p>
                          <p
                            style={{
                              margin: "0",
                              fontWeight: "bold",
                              marginTop: "2px",
                              color: "#aeb3b6",
                            }}
                          >
                            {formik.values.cargo}
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
                        <table>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  lineHeight: "0",
                                  padding: "2px 8px 2px 0",
                                }}
                              >
                                <a
                                  href={`mailto:${formik.values.email}`}
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
                                  href={`mailto:${formik.values.email}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "#0166b3",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {formik.values.email}
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
                        <table>
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
                                <table style={{ borderCollapse: "collapse" }}>
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
      <br />
    </div>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {!loaded ? (
        <form
          style={{
            width: "100%",
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          onSubmit={formik.handleSubmit}
        >
          <Box>
            <TextField
              fullWidth
              id="nome"
              name="nome"
              label="Nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              error={formik.touched.nome && Boolean(formik.errors.nome)}
              helperText={formik.touched.nome && formik.errors.nome}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="cargo"
              name="cargo"
              label="Cargo"
              value={formik.values.cargo}
              onChange={formik.handleChange}
              error={formik.touched.cargo && Boolean(formik.errors.cargo)}
              helperText={formik.touched.cargo && formik.errors.cargo}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="linkedin"
              name="linkedin"
              label="Linkedin"
              value={formik.values.linkedin}
              onChange={formik.handleChange}
              error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
              helperText={formik.touched.linkedin && formik.errors.linkedin}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="imagem"
              name="imagem"
              label="Url da imagem"
              value={formik.values.imagem}
              onChange={formik.handleChange}
              error={formik.touched.imagem && Boolean(formik.errors.imagem)}
              helperText={formik.touched.imagem && formik.errors.imagem}
            />
          </Box>
          <Button
            sx={{
              display: "grid",
            }}
            type="submit"
            variant="contained"
          >
            Carregar
          </Button>
        </form>
      ) : (
        <>
          <h2 style={{ color: "#365ea5" }}>Assinatura - Futurotec</h2>
          {assinatura}
          <Button
            sx={{ marginTop: "1rem" }}
            variant="contained"
            onClick={(e) => {
              const code = ref.current.innerHTML;
              const type = "text/html";
              const blob = new Blob([code], { type });
              const data = [new window.ClipboardItem({ [type]: blob })];
              navigator.clipboard.write(data);
            }}
          >
            Copiar para a área de transferência
          </Button>
        </>
      )}
    </Box>
  );
}

export default App;
