class UserScriptUtils {
  constructor() {}

  async waitUntil(
    testCondition: () => boolean,
    timeoutMs = 30_000,
    checkIntervalMs = 1_000,
  ) {
    const start_ts = new Date().getTime();
    let elapsed_time = 0;

    while (!testCondition()) {
      elapsed_time = +(new Date().getTime() - start_ts);

      // Se il timeout è un numero
      if (
        !!timeoutMs &&
        !isNaN(timeoutMs) &&
        timeoutMs > 0 &&
        elapsed_time >= timeoutMs
      ) {
        throw new Error(
          `Timeout of ${timeoutMs} ms exceeded (${elapsed_time} ms elapsed)`,
        );
      }
      await this.sleep(checkIntervalMs);
    }
    return {
      msg: `The specified condition was met before the ${timeoutMs} ms timeout`,
      time: elapsed_time,
      given_timeout: timeoutMs,
    };
  }

  async waitForElementPresent(cssSelector: string, timeoutMs = 30_000) {
    if (!cssSelector.trim()) throw new Error('Please specify a css selector');

    /* 
			Può anche essere definito così:
				return this.waitUntil(() => !!document.querySelector(cssSelector), timeoutMs);
			
			Ritorno il valore di un'altra Promise per poter customizzare meglio le risposte
		*/
    return new Promise((resolve, reject) => {
      this.waitUntil(() => !!document.querySelector(cssSelector), timeoutMs)
        .then((result) =>
          resolve({
            msg: `Element with selector ${cssSelector} is present`,
            time: result.time,
          }),
        )
        .catch((result) => reject(new Error(result)));
    });
  }

  async waitForElementNotPresent(cssSelector: string, timeoutMs = 30000) {
    if (!cssSelector.trim()) throw new Error('Please specify a css selector');

    return new Promise((resolve, reject) => {
      this.waitUntil(() => !document.querySelector(cssSelector), timeoutMs)
        .then((result) =>
          resolve({
            msg: `Element with selector ${cssSelector} is not present`,
            time: result.time,
          }),
        )
        .catch((result) => reject(new Error(result)));
    });
  }

  sleep(ms = 0) {
    return new Promise((resolve, reject) => {
      if (!ms || isNaN(ms) || ms < 0) {
        reject(new Error('Timeout must be a positive number'));
      }
      setTimeout(resolve, ms);
    });
  }
}

export const userScriptUtils = new UserScriptUtils();
