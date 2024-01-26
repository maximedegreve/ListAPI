import React, { createContext, useContext, useState, useEffect } from 'react'

export function useMedia(mediaQueryString, defaultState) {
    const features = useContext(MatchMediaContext)
    const [matches, setMatches] = React.useState(() => {
        if (features[mediaQueryString] !== undefined) {
            return features[mediaQueryString]
        }

        if (defaultState !== undefined) {
            return defaultState
        }

        console.log(
            true,
            '`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.'
        )

        return false
    })

    useEffect(() => {
        if (features[mediaQueryString] !== undefined) {
            setMatches(features[mediaQueryString])
        }
    }, [features, mediaQueryString])

    useEffect(() => {
        if (features[mediaQueryString] !== undefined) {
            return
        }

        function listener(event) {
            setMatches(event.matches)
        }

        const mediaQueryList = window.matchMedia(mediaQueryString)

        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', listener)
        } else {
            mediaQueryList.addListener(listener)
        }

        setMatches(mediaQueryList.matches)

        return () => {
            if (mediaQueryList.addEventListener) {
                mediaQueryList.removeEventListener('change', listener)
            } else {
                mediaQueryList.removeListener(listener)
            }
        }
    }, [features, mediaQueryString])

    return matches
}

const MatchMediaContext = createContext({})

const defaultFeatures = {}

export function MatchMedia({ children, features = defaultFeatures }) {
    const value = useShallowObject(features)
    return (
        <MatchMediaContext.Provider value={value}>
            {children}
        </MatchMediaContext.Provider>
    )
}

function useShallowObject(object) {
    const [value, setValue] = useState(object)

    if (value !== object) {
        const match = Object.keys(object).every((key) => {
            return object[key] === value[key]
        })
        if (!match) {
            setValue(object)
        }
    }

    return value
}
