import { createContext, useContext, useEffect, useState } from 'react';

/**
 * A side bar component with Overlay
 * @example
 * ```jsx
 * <Aside type="search" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 * @param {{
 *   children?: React.ReactNode;
 *   type: AsideType;
 *   heading: React.ReactNode;
 * }}
 */
export function Aside({ children, heading, type }) {
  const { activeType, content, close } = useAside();
  const expanded = type === activeType;

  useEffect(() => {
    const abortController = new AbortController();

    if (expanded) {
      document.addEventListener(
        'keydown',
        function handler(event) {
          if (event.key === 'Escape') {
            close();
          }
        },
        { signal: abortController.signal },
      );
    }
    return () => abortController.abort();
  }, [close, expanded]);

  return expanded ? (
    <div
      aria-modal
      className={`overlay ${expanded ? 'expanded' : ''} sideDrawer`}
      role="dialog"
    >
      <button className="close-outside" onClick={close} />
      <aside>
        <header>
          <h3>{heading}</h3>
          <button className="close reset" onClick={close}>
            &times;
          </button>
        </header>
        <main>{content || children}</main>
      </aside>
    </div>
  ) : null;
}

const AsideContext = createContext(null);

Aside.Provider = function AsideProvider({ children }) {
  const [activeType, setActiveType] = useState('closed');
  const [activeContent, setActiveContent] = useState(null);

  const open = (type, content) => {
    setActiveType(type);
    setActiveContent(content);
  };
  const close = () => {
    setActiveType('closed');
    setActiveContent(null);
  };

  return (
    <AsideContext.Provider value={{ activeType, open, close, content: activeContent }}>
      {children}
    </AsideContext.Provider>
  );
};

export function useAside() {
  const context = useContext(AsideContext);
  if (!context) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return context;
}

/** @typedef {'search' | 'cart' | 'mobile' | 'productDetails' | 'closed'} AsideType */
