import { useCallback, useEffect, useMemo, useState } from 'react'

function formatISODate(date) {
  // YYYY-MM-DD in local time
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function pickRandomItem(items) {
  if (!Array.isArray(items) || items.length === 0) return null
  const index = Math.floor(Math.random() * items.length)
  return items[index] ?? null
}

/**
 * Returns a stable "daily" random card.
 * - Persists selection in localStorage by date.
 * - Falls back gracefully when storage is unavailable.
 */
export function useDailyTarotCard(cards, options = {}) {
  const storageKey = options.storageKey ?? 'orac:daily-tarot-card'

  const todayKey = useMemo(() => formatISODate(new Date()), [])

  const [selectedCard, setSelectedCard] = useState(null)

  const selectAndPersist = useCallback(() => {
    const candidate = pickRandomItem(cards)
    setSelectedCard(candidate)

    try {
      if (candidate?.id === undefined || candidate?.id === null) return
      localStorage.setItem(
        storageKey,
        JSON.stringify({ date: todayKey, id: candidate.id })
      )
    } catch {
      // ignore storage errors (private mode, disabled, etc.)
    }
  }, [cards, storageKey, todayKey])

  useEffect(() => {
    if (!Array.isArray(cards) || cards.length === 0) {
      setSelectedCard(null)
      return
    }

    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed?.date === todayKey) {
          const found = cards.find((c) => c?.id === parsed?.id)
          if (found) {
            setSelectedCard(found)
            return
          }
        }
      }
    } catch {
      // ignore parsing/storage errors
    }

    selectAndPersist()
  }, [cards, selectAndPersist, storageKey, todayKey])

  return {
    card: selectedCard,
    redraw: selectAndPersist
  }
}
