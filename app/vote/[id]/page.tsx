"use client";

import { useRef, useState } from "react";
import { useFormState } from "react-dom";
import { searchItem, updateItem } from "@/app/action";
import Image from "next/image";
import NavBar from "@/components/nav";
import { SearchButton, SubmitButton } from "@/components/Savebutton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Props = {
  params: any;
};

export default function PlacePage({ params }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(searchItem, [
    {
      error: null,
    },
  ]);

  const [daySelect, setDaySelect] = useState("0");
  const [monthSelect, setMonthSelect] = useState("0");
  const [yearSelect, setYearSelect] = useState("0");

  return (
    <main className="p-4">
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-10">
        <form
          action={async (formData: FormData) => {
            formAction(formData);
          }}
          ref={formRef}
          className="flex flex-col items-center justify-center p-4 gap-4"
        >
          <h1>
            <b>Vote for {params.id}</b>
          </h1>
          <Image
            src={`/uploads/${params.id}.jpg`}
            width={200}
            height={0}
            alt="Picture of the author"
            className="rounded"
          />
          <div className="w-full flex justify-between items-center gap-2">
            <input
              type="text"
              name="input"
              className="w-full border p-2 rounded-lg text-black"
              placeholder="รหัสพนักงาน"
            />
            <SearchButton />
          </div>
        </form>

        <div className="w-full flex flex-col items-center justify-center p">
          {formState.error ? (
            <p className="w-full flex flex-col items-center justify-between rounded-lg p-2 mb-2 text-red-500 font-bold">
              โปรดใส่รหัสพนักงาน!
            </p>
          ) : (
            <form
              action={async (e) => {
                const itemsreturn = await updateItem(e);
                if (itemsreturn) {
                  alert("บันทึกเรียบร้อย");
                } else {
                  alert("กรุณากรอกข้อมูลให้ถูกต้อง");
                }
              }}
            >
              <div className="items-center flex flex-col justify-center gap-y-2 text-black">
                {formState.map((t: any, index: number) => {
                  return (
                    <div
                      key={t.id + "vote"}
                      className="w-[280px] flex flex-col items-left justify-between text-sm border-gray-300 bg-gray-100 rounded-lg p-2 mb-2 gap-1 text-black"
                    >
                      <input
                        className="bg-gray-100 font-bold text-black"
                        type="text"
                        name="no"
                        defaultValue={t.username}
                        readOnly
                      />
                      <input
                        className="bg-gray-100 font-bold text-black"
                        type="text"
                        name="name"
                        defaultValue={t.name}
                        readOnly
                      />
                      <input
                        className="bg-gray-100 font-bold text-black"
                        type="text"
                        name="department"
                        defaultValue={t.department}
                        readOnly
                      />
                      {/* <span id="no">
                        <b>รหัสพนักงาน : </b> {t.username}
                      </span>
                      <span id="name">
                        <b>ชื่อ : </b> {t.name}
                      </span>
                      <span id="department">
                        <b>แผนก : </b> {t.department}
                      </span> */}
                      <input
                        type="hidden"
                        name="Vote"
                        defaultValue={params.id}
                      />
                    </div>
                  );
                })}
                <Label className="flex justify-between p-2">
                  วันที่เริ่มเข้าทำงาน :
                </Label>
                <div className="flex justify-center items-center gap-1">
                  <Select onValueChange={setDaySelect} defaultValue={daySelect}>
                    <SelectTrigger className="bg-white text-black w-[100px]">
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent defaultValue="year">
                      <SelectGroup>
                        <SelectItem value="01">1</SelectItem>
                        <SelectItem value="02">2</SelectItem>
                        <SelectItem value="03">3</SelectItem>
                        <SelectItem value="04">4</SelectItem>
                        <SelectItem value="05">5</SelectItem>
                        <SelectItem value="06">6</SelectItem>
                        <SelectItem value="07">7</SelectItem>
                        <SelectItem value="08">8</SelectItem>
                        <SelectItem value="09">9</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="13">13</SelectItem>
                        <SelectItem value="14">14</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                        <SelectItem value="16">16</SelectItem>
                        <SelectItem value="17">17</SelectItem>
                        <SelectItem value="18">18</SelectItem>
                        <SelectItem value="19">19</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="21">21</SelectItem>
                        <SelectItem value="22">22</SelectItem>
                        <SelectItem value="23">23</SelectItem>
                        <SelectItem value="24">24</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="26">26</SelectItem>
                        <SelectItem value="27">27</SelectItem>
                        <SelectItem value="28">28</SelectItem>
                        <SelectItem value="29">29</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                        <SelectItem value="31">31</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select
                    onValueChange={setMonthSelect}
                    defaultValue={monthSelect}
                  >
                    <SelectTrigger className="bg-white text-black w-[100px]">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="01">Jan</SelectItem>
                        <SelectItem value="02">Feb</SelectItem>
                        <SelectItem value="03">Mar</SelectItem>
                        <SelectItem value="04">Apr</SelectItem>
                        <SelectItem value="05">May</SelectItem>
                        <SelectItem value="06">Jun</SelectItem>
                        <SelectItem value="07">Jul</SelectItem>
                        <SelectItem value="08">Aug</SelectItem>
                        <SelectItem value="09">Sep</SelectItem>
                        <SelectItem value="10">Oct</SelectItem>
                        <SelectItem value="11">Nov</SelectItem>
                        <SelectItem value="12">Dec</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select
                    onValueChange={setYearSelect}
                    defaultValue={yearSelect}
                  >
                    <SelectTrigger className="bg-white text-black w-[100px]">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1982">1982</SelectItem>
                        <SelectItem value="1983">1983</SelectItem>
                        <SelectItem value="1984">1984</SelectItem>
                        <SelectItem value="1985">1985</SelectItem>
                        <SelectItem value="1986">1986</SelectItem>
                        <SelectItem value="1987">1987</SelectItem>
                        <SelectItem value="1988">1988</SelectItem>
                        <SelectItem value="1989">1989</SelectItem>
                        <SelectItem value="1990">1990</SelectItem>
                        <SelectItem value="1991">1991</SelectItem>
                        <SelectItem value="1992">1992</SelectItem>
                        <SelectItem value="1993">1993</SelectItem>
                        <SelectItem value="1994">1994</SelectItem>
                        <SelectItem value="1995">1995</SelectItem>
                        <SelectItem value="1996">1996</SelectItem>
                        <SelectItem value="1997">1997</SelectItem>
                        <SelectItem value="1998">1998</SelectItem>
                        <SelectItem value="1999">1999</SelectItem>
                        <SelectItem value="2000">2000</SelectItem>
                        <SelectItem value="2001">2001</SelectItem>
                        <SelectItem value="2002">2002</SelectItem>
                        <SelectItem value="2003">2003</SelectItem>
                        <SelectItem value="2004">2004</SelectItem>
                        <SelectItem value="2005">2005</SelectItem>
                        <SelectItem value="2006">2006</SelectItem>
                        <SelectItem value="2007">2007</SelectItem>
                        <SelectItem value="2008">2008</SelectItem>
                        <SelectItem value="2009">2009</SelectItem>
                        <SelectItem value="2010">2010</SelectItem>
                        <SelectItem value="2011">2011</SelectItem>
                        <SelectItem value="2012">2012</SelectItem>
                        <SelectItem value="2013">2013</SelectItem>
                        <SelectItem value="2014">2014</SelectItem>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <SubmitButton />
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
