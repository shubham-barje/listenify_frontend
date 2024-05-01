import LoggedInContainer from "../containers/LoggedInContainer"
import { Icon } from "@iconify/react"
import { useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers"
import SingleAudiobookCard from "../components/shared/SingleAudiobookCard";
const SearchPage = () => {
    const [isInputFocused, setIsInputFocused] = useState(false)
    // searchText capture value when we put in input in search bar
    const [searchText, setSearchText] = useState("")
    const [audiobookData, setAudiobookData] = useState([])



    const searchAudiobooks = async () => {
        // we will call the search api
        const response = await makeAuthenticatedGETRequest("/audiobook/get/audiobookname/" + searchText)
        // so setaudiobookData will get response of data and fetch to the audiobookData and upadate the audiobookData
        setAudiobookData(response.data)
        console.log(response)
        setSearchText("")


    }
    return (
        <LoggedInContainer currentActiveScreen={"search"}>
            <div className="w-full py-6">
                <div className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${isInputFocused ? "border border-white" : ""}`}>
                    <Icon icon="ic:twotone-search" className="text-lg" />

                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full bg-gray-800 focus:outline-none text-white"
                        onFocus={() => { setIsInputFocused(true) }}
                        onBlur={() => { setIsInputFocused(false) }}
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                        onKeyDown={(e) => {
                            //we acess the key property of the event object
                            console.log(e)
                            if (e.key === "Enter") {
                                searchAudiobooks()
                            }
                        }}

                    />
                </div>


            </div>
            {

                audiobookData.length > 0 ? (
                    <div className="pt-4 space-y-1">
                        <div className="text-white"> The serch result for : <span className="font-bold">{searchText}</span> </div>
                        {audiobookData.map((item) => {
                            return (
                                <SingleAudiobookCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => { }}
                                />
                            )
                        })}
                    </div>) : (<div>Nothing to show here</div>)
            }:




        </LoggedInContainer>
    )
}
export default SearchPage;