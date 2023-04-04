import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./KateAusten.module.css";

const KateAusten: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTagsTextClick = useCallback(() => {
    navigate("/tags");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.kateAusten}>
      <div className={styles.divwrapper}>
        <div className={styles.divrowFluid}>
          <div className={styles.divspan3}>
            <div className={styles.ulnav}>
              <div className={styles.linavigationItem}>
                <div className={styles.pseudo} />
                <div className={styles.ah2d61e3f13a}>
                  <img
                    className={styles.svgh2d3b5dec81Icon}
                    alt=""
                    src="/svgh2d3b5dec81.svg"
                  />
                  <b className={styles.details}>Details</b>
                </div>
              </div>
              <div className={styles.ah2dC6391d15}>
                <img
                  className={styles.svgh2d3b5dec81Icon}
                  alt=""
                  src="/svgh2db38d1a96.svg"
                />
                <b className={styles.details}>Attendance</b>
              </div>
              <div className={styles.ah2dA55d8ee4}>
                <img
                  className={styles.svgh2d3b5dec81Icon}
                  alt=""
                  src="/svgh2dc2ac6ca3.svg"
                />
                <b className={styles.details}>Giving</b>
              </div>
              <div className={styles.divdivider} />
            </div>
          </div>
          <div className={styles.divspan9}>
            <div className={styles.divprofileTop}>
              <div className={styles.divrowFluid1}>
                <img
                  className={styles.b743818d7771jpgIcon}
                  alt=""
                  src="/5b743818d7771jpg@2x.png"
                />
                <div className={styles.divspan8}>
                  <b className={styles.kateAusten1}>Kate Austen</b>
                  <div className={styles.divpersonMainDetailsContai}>
                    <div className={styles.divpersonMainDetailsItem}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/frame10.svg"
                      />
                      <div className={styles.div}>(616) 555-5555</div>
                    </div>
                    <div className={styles.divpersonMainDetailsItem1}>
                      <img
                        className={styles.frameIcon1}
                        alt=""
                        src="/frame11.svg"
                      />
                      <div className={styles.div}>(616) 555-5555</div>
                    </div>
                    <div className={styles.divpersonMainDetailsItem}>
                      <img
                        className={styles.frameIcon2}
                        alt=""
                        src="/frame12.svg"
                      />
                      <div className={styles.div}>555-5555</div>
                    </div>
                    <div className={styles.divpersonMainDetailsItem1}>
                      <img
                        className={styles.frameIcon2}
                        alt=""
                        src="/frame13.svg"
                      />
                      <div className={styles.div}>kausten@example.com</div>
                    </div>
                    <div className={styles.divpersonMainDetailsItem4}>
                      <img
                        className={styles.frameIcon4}
                        alt=""
                        src="/frame14.svg"
                      />
                      <div className={styles.ah2dBdcff1a8}>
                        <div className={styles.sheldonAveNeContainer}>
                          <p className={styles.sheldonAveNe}>
                            11 Sheldon Ave NE
                          </p>
                          <p className={styles.sheldonAveNe}>
                            Grand Rapids, MI 49503
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divrowFluid2}>
              <div className={styles.divcolumn1}>
                <div className={styles.divsection1}>
                  <div className={styles.tdh2d538c595f}>
                    <div className={styles.name}>Name</div>
                  </div>
                  <div className={styles.tdh2dCb76e31a}>
                    <div className={styles.kateAusten2}>Kate Austen</div>
                  </div>
                  <div className={styles.tdh2dA6d06741}>
                    <div className={styles.gender}>Gender</div>
                  </div>
                  <div className={styles.tdh2d57ad3d91}>
                    <div className={styles.female}>Female</div>
                  </div>
                  <div className={styles.tdh2d229c9485}>
                    <div className={styles.status}>Status</div>
                  </div>
                  <div className={styles.tdh2dA23b7b3c}>
                    <div className={styles.member}>Member</div>
                  </div>
                  <div className={styles.tdh2dF7c0f500}>
                    <div className={styles.maritalStatus}>Marital Status</div>
                  </div>
                  <div className={styles.tdh2dAf0954bc}>
                    <div className={styles.single}>Single</div>
                  </div>
                  <div className={styles.tdh2d8370d192}>
                    <div className={styles.age}>Age</div>
                  </div>
                  <div className={styles.tdh2d8582111a}>
                    <div className={styles.yearsOldAugustContainer}>
                      <span className={styles.yearsOldAugustContainer1}>
                        <p className={styles.sheldonAveNe}>38 Years Old</p>
                        <p className={styles.august211984}>August 21, 1984</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.divsection2}>
                  <div className={styles.h4editSection}>
                    <div className={styles.family}>Family</div>
                  </div>
                  <div className={styles.noInformationStored}>
                    No information stored.
                  </div>
                </div>
              </div>
              <div className={styles.divcolumn2}>
                <div className={styles.divsection3}>
                  <div className={styles.tdh2d61cfe50}>
                    <div className={styles.grade}>Grade</div>
                  </div>
                  <div className={styles.tdh2d41bc7502}>
                    <div className={styles.graduated}>Graduated</div>
                  </div>
                </div>
                <div className={styles.divsection4}>
                  <div className={styles.h4editSection1}>
                    <div className={styles.family}>Contact</div>
                  </div>
                  <div className={styles.tdh2d2d332d70}>
                    <div className={styles.mobile}>Mobile</div>
                  </div>
                  <div className={styles.tdh2d3ba34781}>
                    <div className={styles.div3}>(616) 555-5555</div>
                  </div>
                  <div className={styles.tdh2d6d1f628d}>
                    <div className={styles.home}>Home</div>
                  </div>
                  <div className={styles.tdh2d5d2f92d7}>
                    <div className={styles.div4}>(616) 555-5555</div>
                  </div>
                  <div className={styles.tdh2d3fbe6e9c}>
                    <div className={styles.work}>Work</div>
                  </div>
                  <div className={styles.tdh2dBe9364cb}>
                    <div className={styles.div5}>555-5555</div>
                  </div>
                  <div className={styles.tdh2dBf9da08d}>
                    <div className={styles.campus}>Campus</div>
                  </div>
                  <div className={styles.tdh2d740e1d4a}>
                    <div className={styles.east}>East</div>
                  </div>
                  <div className={styles.tdh2d8a395b57}>
                    <div className={styles.email}>Email</div>
                  </div>
                  <div className={styles.tdh2d85213292}>
                    <div className={styles.kaustenexamplecom1}>
                      kausten@example.com
                    </div>
                  </div>
                  <div className={styles.tdh2dF9cf3122}>
                    <div className={styles.address}>Address</div>
                  </div>
                  <div className={styles.tdh2dE184d388}>
                    <div className={styles.divpersonAddressContainer}>
                      <div className={styles.details}>
                        <p className={styles.sheldonAveNe}>11 Sheldon Ave NE</p>
                        <p className={styles.sheldonAveNe}>
                          Grand Rapids, MI 49503
                        </p>
                      </div>
                      <div className={styles.div642962b919991}>
                        <div className={styles.divopenlayersMap2Openlayer}>
                          <div className={styles.divopenlayersMap2Openlayer1}>
                            <div className={styles.divopenlayersLayerOsm18}>
                              <img
                                className={styles.pngIcon}
                                alt=""
                                src="/96360png@2x.png"
                              />
                              <img
                                className={styles.pngIcon1}
                                alt=""
                                src="/96360png1@2x.png"
                              />
                              <img
                                className={styles.pngIcon2}
                                alt=""
                                src="/96361png@2x.png"
                              />
                              <img
                                className={styles.pngIcon3}
                                alt=""
                                src="/96361png1@2x.png"
                              />
                            </div>
                            <img
                              className={styles.markerpngIcon}
                              alt=""
                              src="/markerpng@2x.png"
                            />
                          </div>
                          <div className={styles.divopenlayersControlZoom5} />
                          <div className={styles.divopenlayersControlAttribu}>
                            <div className={styles.details}>
                              <span>{`© `}</span>
                              <span className={styles.openstreetmap}>
                                OpenStreetMap
                              </span>
                              <span> contributors</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divnavigationBar}>
          <div className={styles.ulnavigationWrapper}>
            <div className={styles.svg} />
            <div className={styles.atertiary} />
            <div className={styles.people}>People</div>
            <div className={styles.tags} onClick={onTagsTextClick}>
              Tags
            </div>
            <div className={styles.events} onClick={onEventsTextClick}>
              Events
            </div>
            <div className={styles.anavigationMoreDropdownTo}>
              <div className={styles.more}>More</div>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
            </div>
            <img className={styles.logopngIcon} alt="" src="/logopng@2x.png" />
            <b className={styles.talawa}>Talawa</b>
            <div className={styles.dashboard} onClick={onDashboardTextClick}>
              Dashboard
            </div>
          </div>
          <div className={styles.divnavigationWrapperRight}>
            <div className={styles.divnavSearchWrapper}>
              <div className={styles.divnavSearchInputGroup} />
              <img
                className={styles.svgh2dF44e3a62Icon}
                alt=""
                src="/svgh2df44e3a62.svg"
              />
            </div>
            <img
              className={styles.anavMiniDropdownIcon}
              alt=""
              src="/anavmini--dropdownicon1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.divsmsPerson}>
        <div className={styles.divmodalFooter} />
      </div>
    </div>
  );
};

export default KateAusten;
