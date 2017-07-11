width = 60.
height = 25.

from scipy import signal
import numpy as np

import matplotlib.pyplot as plt

time = np.linspace(-1, 1, 50, endpoint=True)
pulse = signal.gausspulse(time, fc=2)
plt.plot(time, pulse)
# plt.show()

output = "          points='"
xmid = height / 2
for ii in range(len(pulse)):
    x = float(ii) / (len(pulse) - 1) * width
    output += '{:.3f}'.format(x)
    output += ','
    y = height / 2 + height / 2 * -pulse[ii]
    output += '{:0.3f}'.format(y)
    output += ' '
output = output[:-1]
output += "'"

print(output)
