import useLocalStorageObserved from './'
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useLocalStorageObserved', () => {
  it('updates every second', () => {
    const { result } = renderHook(() => useLocalStorageObserved({keyName:'token'}));

    expect(result.current).toBe(false);

  })
})
