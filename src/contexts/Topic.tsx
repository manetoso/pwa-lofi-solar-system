import { createContext, useState, Dispatch, SetStateAction } from "react"

interface TopicInterface {
    topic: 'overview' | 'internal' | 'geology'
}

interface Props {
    topic: 'overview' | 'internal' | 'geology',
    setTopic: Dispatch<SetStateAction<TopicInterface>>
}

export const TopicContext = createContext<Props>({
    topic: 'overview',
    setTopic: () => {}
})

export const TopicContextProvider = ( props:any ) => {
    const [{topic}, setTopic] = useState<TopicInterface>({
        topic: 'overview'
    })
    return (
        <TopicContext.Provider value={{ topic, setTopic }}>
            { props.children }
        </TopicContext.Provider>
    )
}