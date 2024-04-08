import React from "react";

function EducationDetail() {
  return (
    <>
      <div class="container">
        <a href="#">
          <img
            src="https://s26.postimg.org/kd8zstg15/Top_Header.jpg"
            alt="img/TopHeader.jpg"
            class="img-thumbnail"
          />
        </a>
      </div>

      <div class="navbar navbar-default">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="#">
                    <i class="fa fa-home"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-th-list"></i> Online Application
                  </a>
                </li>
                {/* <li><a href="#"><i class="fa fa-bar-chart"></i></i> Payment Status</a></li> */}
                <li>
                  <a href="#">
                    <i class="fa fa-key"></i> Forget PIN
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-arrow-circle-o-down"></i> Admit Card
                    Download
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-book"></i> Result
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-file"></i> Download{" "}
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Offline Aplication Form</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-link"></i> Link <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">University Home</a>
                    </li>
                    <li>
                      <a href="#">Admission Home</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-user"></span> Login{" "}
                    <span class="caret"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ////////////////////////////////////////// --> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 well">
            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title text-center">
                  Application for Admission in &nbsp;
                  <font color="blue">ARTS & COMMERCE </font>
                  <font color="blue">Colleage</font> - APRIL 2024
                </h3>
              </div>
              <legend class="text-center progress-bar-info panel-footer">Basic Information</legend>
              <div class="panel-body">
                {/* <form class="form-horizontal row">  */}
                <div class="form-horizontal row">
                  <div class="form-group">
                    <label for="applicant_name" class="control-label col-sm-3">
                      Name Of the Student:
                    </label>
                    <div class="col-sm-7">
                      <input
                        type="text"
                        name="applicant_name"
                        id="applicant_name"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="father_name" class="control-label col-sm-3">
                      Father's Name :
                    </label>
                    <div class="col-sm-7">
                      <input
                        type="text"
                        name="father_name"
                        id="father_name"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="date_of_birth" class="control-label col-sm-3">
                      Date of Birth :
                    </label>
                    <div class="col-sm-2">
                      <select
                        name="date_day"
                        id="date_of_birth"
                        class="form-control"
                      >
                        <option selected disabled value="">
                          Day
                        </option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <span class="help-inline"></span>
                    </div>
                    <div class="col-sm-2">
                      <select name="date_month" class="form-control">
                        <option selected disabled value="">
                          Month
                        </option>
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                      </select>
                    </div>
                    <div class="col-sm-2">
                      <select name="date_year" class="form-control">
                        <option disabled selected value="">
                          Year
                        </option>
                        <option value="1955">1955</option>
                        <option value="1956">1956</option>
                        <option value="1957">1957</option>
                        <option value="1958">1958</option>
                        <option value="1959">1959</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label col-sm-3" for="mobile">
                      Mobile :
                    </label>
                    <div class="col-sm-4">
                      <div class="input-group">
                        <span class="input-group-addon">+91</span>
                        <input
                          type="text"
                          class="form-control"
                          id="mobile"
                          maxlength="10"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="mobile">
                      Pranet's Mobile :
                    </label>
                    <div class="col-sm-4">
                      <div class="input-group">
                        <span class="input-group-addon">+91</span>
                        <input
                          type="text"
                          class="form-control"
                          id="mobile"
                          maxlength="10"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="gender" class="control-label col-sm-3">
                      Gender :
                    </label>
                    <div class="col-sm-2">
                      <select name="gender" id="gender" class="form-control">
                        <option value="" selected disabled>
                          Select
                        </option>
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                      </select>
                    </div>
                    <label for="religion" class="control-label col-sm-2">
                      Religion :
                    </label>
                    <div class="col-sm-3">
                      <select
                        name="religion"
                        id="religion"
                        class="form-control"
                      >
                        <option value="" disabled selected>
                          Select
                        </option>
                        <option value="ISLAM">ISLAM</option>
                        <option value="HINDUISM">HINDUISM</option>
                        <option value="CHRISTIANITY">CHRISTIANITY</option>
                        <option value="BUDDHISM">BUDDHISM</option>
                        <option value="OTHER">OTHER</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="blood_group" class="control-label col-sm-3">
                      Miniority :
                    </label>
                    <div class="col-sm-2">
                      <select
                        name="blood_group"
                        id="blood_group"
                        class="form-control"
                      >
                        <option value="">Select</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                      </select>
                    </div>

                    <label for="nationality" class="control-label col-sm-2">
                      Nationality :
                    </label>
                    <div class="col-sm-3">
                      <select
                        name="nationality"
                        id="nationality"
                        class="form-control"
                      >
                        <option value="">Select</option>
                        <option value="NRI" selected>
                          NRI
                        </option>
                        <option value="BANGLADESHI" selected>
                          Indian
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="blood_group" class="control-label col-sm-3">
                      Disibility :
                    </label>
                    <div class="col-sm-2">
                      <select
                        name="blood_group"
                        id="blood_group"
                        class="form-control"
                      >
                        <option value="">Select</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                      </select>
                    </div>

                    <label for="nationality" class="control-label col-sm-2">
                      Category :
                    </label>
                    <div class="col-sm-3">
                      <select
                        name="nationality"
                        id="nationality"
                        class="form-control"
                      >
                        <option value="">Select</option>
                        <option value="BANGLADESHI" selected>
                          General
                        </option>
                        <option value="BANGLADESHI" selected>
                          SEBC
                        </option>
                        <option value="BANGLADESHI" selected>
                          EWS
                        </option>
                        <option value="BANGLADESHI" selected>
                          SC
                        </option>
                        <option value="BANGLADESHI" selected>
                          ST
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="blood_group" class="control-label col-sm-3">
                    Specify your interest (Any one) : 
                    </label>
                    <div class="col-sm-2">
                      <select
                        name="blood_group"
                        id="blood_group"
                        class="form-control"
                      >
                        <option value="">Select</option>
                        <option value="YES">NSS</option>
                        <option value="NO">NCC</option>
                        <option value="YES">SPORTS</option>
                        <option value="NO">CULTURAL PROGRAMME</option>
                        <option value="YES">N/A</option>
                       
                      </select>
                    </div>

                    
                  </div>

                  <div class="form-group">
                    <label for="national_id" class="control-label col-sm-3">
                      Aadhaar ID :
                    </label>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        name="national_id"
                        id="national_id"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email" class="control-label col-sm-3">
                      Email :
                    </label>
                    <div class="col-sm-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="present_address" class="control-label col-sm-3">
                      Present Address :
                    </label>
                    <div class="col-sm-7">
                      <textarea
                        name="present_address"
                        rows="3"
                        id="present_address"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>

                

                  <fieldset>
                    <legend class="text-center progress-bar-info panel-footer">Academic Qualifications</legend>
                    {/* <!-- ************ Start of SSC and HSC************** --> */}
                    <div class="row">
                      {/* <!-- ************ Start of HSC ************** --> */}
                      <div class="col-lg-8">
                        <div class="panel panel-default">
                          <div class="panel-heading ">
                            <h5 class="panel-title text-center">
                              HSC or Equivalent Level*
                            </h5>
                          </div>
                          <div class="panel-body">
                            <div class="form-group">
                              <label
                                for="hsc_exam_type"
                                class="control-label col-sm-4"
                              >
                                Examination :
                              </label>
                              <div class="col-sm-8">
                                <select
                                  name="hsc_exam_type"
                                  id="hsc_exam_type"
                                  class="form-control"
                                >
                                  <option selected disabled value="">
                                    Select One
                                  </option>
                                  <option value="HSC">H.S.C</option>
                                  <option value="ALIM">Alim</option>
                                  <option value="BUSINESS MANAGEMENT">
                                    Business Management
                                  </option>
                                  <option value="DIPLOMA IN ENGINEERING/AGRICULTURE">
                                    Diploma in Engineering/Agriculture
                                  </option>
                                  <option value="A LEVEL/SR. CAMBRIDGE">
                                    A Level/Sr. Cambridge
                                  </option>
                                  <option value="HSC EQUIVALENT">
                                    H.S.C Equivalent
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="hsc_board"
                                class="control-label col-sm-4"
                              >
                                Board :
                              </label>
                              <div class="col-sm-8">
                                <select
                                  name="hsc_board"
                                  id="hsc_board"
                                  class="form-control"
                                >
                                  <option selected disabled value="">
                                    Select One
                                  </option>
                                  <option value="Dhaka">Dhaka</option>
                                  <option value="COMILLA">Comilla</option>
                                  <option value="RAJSHAHI">Rajshahi</option>
                                  <option value="JESSORE">Jessore</option>
                                  <option value="CHITTAGONG">Chittagong</option>
                                  <option value="BARISAL">Barisal</option>
                                  <option value="SYLHET">Sylhet</option>
                                  <option value="DINAJPUR">Dinajpur</option>
                                  <option value="MADRASAH">Madrasah</option>
                                  <option value="TECHNICAL">Technical</option>
                                  <option value="IGCSE">
                                    Cambridge International - IGCSE
                                  </option>
                                  <option value="EDEXCEL INTERNATIONAL">
                                    Edexcel International
                                  </option>
                                  <option value="OTHERS">Others</option>
                                </select>
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="hsc_roll_no"
                                class="control-label col-sm-4"
                              >
                                Seat No :
                              </label>
                              <div class="col-sm-8">
                                <input
                                  type="text"
                                  name="hsc_roll_no"
                                  id="ssc_roll_no"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="hsc_roll_no"
                                class="control-label col-sm-4"
                              >
                                Passing Year :
                              </label>
                              <div class="col-sm-8">
                                <input
                                  type="text"
                                  name="hsc_roll_no"
                                  id="ssc_roll_no"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                class="control-label col-sm-4"
                                for="hsc_result"
                              >
                                Total Marks :
                              </label>
                              <div class="col-sm-8">
                                <input
                                  type="number"
                                  name="hsc_result"
                                  class="form-control"
                                  id="hsc_result"
                                  step="0.01"
                                  min="1"
                                  max="5"
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                class="control-label col-sm-4"
                                for="hsc_result"
                              >
                                Obtain Marks :
                              </label>
                              <div class="col-sm-8">
                                <input
                                  type="number"
                                  name="hsc_result"
                                  class="form-control"
                                  id="hsc_result"
                                  step="0.01"
                                  min="1"
                                  max="5"
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                class="control-label col-sm-4"
                                for="hsc_result"
                              >
                                No of Trial :
                              </label>
                              <div class="col-sm-8">
                                <input
                                  type="number"
                                  name="hsc_result"
                                  class="form-control"
                                  id="hsc_result"
                                  step="0.01"
                                  min="1"
                                  max="5"
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="hsc_pass_year"
                                class="control-label col-sm-4"
                              >
                                Passing Year :
                              </label>
                              <div class="col-sm-8">
                                <select
                                  class="form-control"
                                  name="hsc_pass_year"
                                  id="hsc_pass_year"
                                >
                                  <option selected disabled value="">
                                    Select One
                                  </option>
                                  <option value="1967">1967</option>
                                  <option value="1968">1968</option>
                                  <option value="1969">1969</option>
                                  <option value="1970">1970</option>
                                  <option value="1971">1971</option>
                                  <option value="1972">1972</option>
                                  <option value="1973">1973</option>
                                  <option value="1974">1974</option>
                                  <option value="1975">1975</option>
                                  <option value="1976">1976</option>
                                  <option value="1977">1977</option>
                                  <option value="1978">1978</option>
                                  <option value="1979">1979</option>
                                  <option value="1980">1980</option>
                                  <option value="1981">1981</option>
                                  <option value="1982">1982</option>
                                  <option value="1983">1983</option>
                                  <option value="1984">1984</option>
                                  <option value="1985">1985</option>
                                  <option value="1986">1986</option>
                                  <option value="1987">1987</option>
                                  <option value="1988">1988</option>
                                  <option value="1989">1989</option>
                                  <option value="1990">1990</option>
                                  <option value="1991">1991</option>
                                  <option value="1992">1992</option>
                                  <option value="1993">1993</option>
                                  <option value="1994">1994</option>
                                  <option value="1995">1995</option>
                                  <option value="1996">1996</option>
                                  <option value="1997">1997</option>
                                  <option value="1998">1998</option>
                                  <option value="1999">1999</option>
                                  <option value="2000">2000</option>
                                  <option value="2001">2001</option>
                                  <option value="2002">2002</option>
                                  <option value="2003">2003</option>
                                  <option value="2004">2004</option>
                                  <option value="2005">2005</option>
                                  <option value="2006">2006</option>
                                  <option value="2007">2007</option>
                                  <option value="2008">2008</option>
                                  <option value="2009">2009</option>
                                  <option value="2010">2010</option>
                                  <option value="2011">2011</option>
                                  <option value="2012">2012</option>
                                  <option value="2013">2013</option>
                                  <option value="2014">2014</option>
                                  <option value="2015">2015</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ************ End of HSC ************** --> */}
                    </div>
                    {/* <!-- ************ End of SSC and HSC************** --> */}

                    {/* <!-- ************ Start of Masters Level (if any)************** -->  */}
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="panel panel-default">
                          {/* <div class="panel-heading"> */}
                            {/* <h5 class="panel-title text-center">
                              Attached Documents
                            </h5> */}
                            <legend class="text-center progress-bar-info panel-footer"> Attached Documents</legend>
                          {/* </div> */}
                          <div class="panel-body">
                            <div class="form-group">
                              <label
                                for="ms_exam_type"
                                class="control-label col-sm-2"
                              >
                                HSC marksheet
                              </label>
                              <div class="col-sm-4">
                                <input
                                  type="file"
                                  name="ms_subject"
                                  id="ms_subject"
                                  class="form-control"
                                />
                              </div>

                              <label
                                class="control-label col-sm-2"
                                for="ms_result"
                              >
                                HSC trial certificate
                              </label>
                              <div class="col-sm-4">
                                <div class="input-group">
                                 
                                  <input
                                    type="file"
                                    name="ms_result"
                                    class="form-control"
                                    id="ms_result"
                                    step="0.01"
                                    min="1"
                                    max="5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="ms_exam_type"
                                class="control-label col-sm-2"
                              >
                                SSC marksheet
                              </label>
                              <div class="col-sm-4">
                                <input
                                  type="file"
                                  name="ms_subject"
                                  id="ms_subject"
                                  class="form-control"
                                />
                              </div>

                              <label
                                class="control-label col-sm-2"
                                for="ms_result"
                              >
                                School leaving Certificate (L.C)
                              </label>
                              <div class="col-sm-4">
                                <div class="input-group">
                                 
                                  <input
                                    type="file"
                                    name="ms_result"
                                    class="form-control"
                                    id="ms_result"
                                    step="0.01"
                                    min="1"
                                    max="5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="ms_exam_type"
                                class="control-label col-sm-2"
                              >
                                Caste certificate (SEBC/SC/ST - if applicable)
                              </label>
                              <div class="col-sm-4">
                                <input
                                  type="file"
                                  name="ms_subject"
                                  id="ms_subject"
                                  class="form-control"
                                />
                              </div>

                              <label
                                class="control-label col-sm-2"
                                for="ms_result"
                              >
                                EWS/non-creamy layer certificate (if applicable)
                              </label>
                              <div class="col-sm-4">
                                <div class="input-group">
                                 
                                  <input
                                    type="file"
                                    name="ms_result"
                                    class="form-control"
                                    id="ms_result"
                                    step="0.01"
                                    min="1"
                                    max="5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="ms_exam_type"
                                class="control-label col-sm-2"
                              >
                                PEC (if applicable)
                              </label>
                              <div class="col-sm-4">
                                <input
                                  type="file"
                                  name="ms_subject"
                                  id="ms_subject"
                                  class="form-control"
                                />
                              </div>

                              <label
                                class="control-label col-sm-2"
                                for="ms_result"
                              >
                               Aadhaar Card
                              </label>
                              <div class="col-sm-4">
                                <div class="input-group">
                                 
                                  <input
                                    type="file"
                                    name="ms_result"
                                    class="form-control"
                                    id="ms_result"
                                    step="0.01"
                                    min="1"
                                    max="5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="ms_subject"
                                class="control-label col-sm-2"
                              >
                                Bank passbook's first page
                              </label>
                              <div class="col-sm-4">
                                <input
                                  type="file"
                                  name="ms_subject"
                                  id="ms_subject"
                                  class="form-control"
                                />
                              </div>

                              

                              

                             
                          
                            </div>
                            <div class="form-group">
                              <label
                                for="ms_university"
                                class="control-label col-sm-2"
                              >
                                Disability certificate
                              </label>
                              <div class="col-sm-4">
                                <input
                                  type="file"
                                  name="ms_university"
                                  id="ms_university"
                                  class="form-control"
                                />
                              </div>

                            </div>

                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ************ End of Masters Level (if any)************** --> */}
                  </fieldset>
                </div>
                <div class="panel-footer">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="checkbox">
                        <label class="text-warning">
                          <input
                            type="checkbox"
                            id="all_correct"
                            name="all_correct"
                            value="1"
                          />{" "}
                          I hereby declare that all the above information are
                          correct and assure that I will abide by all the rules.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-2 col-lg-offset-5">
                      <input
                        type="submit"
                        class="btn btn-success btn-lg btn-block"
                        value="Submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationDetail;
