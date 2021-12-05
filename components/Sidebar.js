import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'

const Sidebar = () => {
    return (
        <>
            <div className={`${styles.sidebar}`}>
                <Link href="/">
                    <a className={`${styles.sidebarLogo}`}>
                    <Image src="/images/logo.png" width={189} height={60} alt="Landder" />
                    </a>
                </Link>

                <ul className={`${styles.menu}`}>
                        <li className={`${styles.active}`}>
                            <Link href="/">
                                <a>
                                    <svg width="18px" height="18px">
                                        <path d="M15.778,18.004 L11.764,18.004 C10.543,18.004 9.549,17.010 9.549,15.789 L9.549,11.774 C9.549,10.553 10.543,9.560 11.764,9.560 L15.778,9.560 C16.999,9.560 17.993,10.553 17.993,11.774 L17.993,15.789 C17.993,17.010 16.999,18.004 15.778,18.004 ZM16.332,11.774 C16.332,11.469 16.083,11.221 15.778,11.221 L11.764,11.221 C11.459,11.221 11.210,11.469 11.210,11.774 L11.210,15.789 C11.210,16.094 11.459,16.343 11.764,16.343 L15.778,16.343 C16.083,16.343 16.332,16.094 16.332,15.789 L16.332,11.774 ZM15.778,8.452 L11.764,8.452 C10.543,8.452 9.549,7.459 9.549,6.237 L9.549,2.223 C9.549,1.001 10.543,0.008 11.764,0.008 L15.778,0.008 C16.999,0.008 17.993,1.001 17.993,2.223 L17.993,6.237 C17.993,7.459 16.999,8.452 15.778,8.452 ZM16.332,2.223 C16.332,1.917 16.083,1.669 15.778,1.669 L11.764,1.669 C11.459,1.669 11.210,1.917 11.210,2.223 L11.210,6.237 C11.210,6.543 11.459,6.791 11.764,6.791 L15.778,6.791 C16.083,6.791 16.332,6.543 16.332,6.237 L16.332,2.223 ZM6.254,18.004 L2.185,18.004 C0.979,18.004 -0.003,17.022 -0.003,15.816 L-0.003,11.747 C-0.003,10.541 0.979,9.560 2.185,9.560 L6.254,9.560 C7.459,9.560 8.441,10.541 8.441,11.747 L8.441,15.816 C8.441,17.022 7.459,18.004 6.254,18.004 ZM6.780,11.747 C6.780,11.456 6.544,11.221 6.254,11.221 L2.185,11.221 C1.894,11.221 1.658,11.456 1.658,11.747 L1.658,15.816 C1.658,16.107 1.894,16.343 2.185,16.343 L6.254,16.343 C6.544,16.343 6.780,16.107 6.780,15.816 L6.780,11.747 ZM6.254,8.452 L2.185,8.452 C0.979,8.452 -0.003,7.471 -0.003,6.265 L-0.003,2.195 C-0.003,0.989 0.979,0.008 2.185,0.008 L6.254,0.008 C7.459,0.008 8.441,0.989 8.441,2.195 L8.441,6.265 C8.441,7.471 7.459,8.452 6.254,8.452 ZM6.780,2.195 C6.780,1.905 6.544,1.669 6.254,1.669 L2.185,1.669 C1.894,1.669 1.658,1.905 1.658,2.195 L1.658,6.265 C1.658,6.555 1.894,6.791 2.185,6.791 L6.254,6.791 C6.544,6.791 6.780,6.555 6.780,6.265 L6.780,2.195 Z"/>
                                    </svg>
                                    <span>Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <svg width="18px" height="18px">
                                        <path d="M17.993,0.841 C17.985,0.906 17.972,0.970 17.946,1.031 C17.946,1.032 17.946,1.032 17.946,1.032 L11.196,17.534 C11.080,17.817 10.805,18.000 10.502,18.000 C10.489,18.000 10.477,17.999 10.465,17.999 C10.148,17.984 9.874,17.770 9.783,17.465 L7.649,10.352 L0.535,8.217 C0.230,8.126 0.016,7.853 0.001,7.535 C-0.015,7.218 0.172,6.925 0.466,6.805 L16.968,0.054 C17.030,0.028 17.096,0.015 17.162,0.007 C17.176,0.005 17.190,0.003 17.205,0.003 C17.270,-0.002 17.335,0.000 17.399,0.013 C17.401,0.013 17.402,0.014 17.404,0.014 C17.465,0.027 17.524,0.050 17.582,0.078 C17.596,0.085 17.609,0.092 17.623,0.100 C17.679,0.132 17.734,0.169 17.783,0.218 C17.831,0.266 17.868,0.321 17.901,0.377 C17.909,0.391 17.916,0.405 17.923,0.420 C17.950,0.475 17.972,0.533 17.985,0.593 C17.986,0.596 17.987,0.599 17.987,0.602 C18.000,0.665 18.001,0.729 17.998,0.793 C17.997,0.809 17.995,0.825 17.993,0.841 ZM2.998,7.390 L8.037,8.902 L14.085,2.854 L2.998,7.390 ZM9.098,9.962 L10.610,15.003 L15.146,3.915 L9.098,9.962 ZM1.345,11.469 C1.638,11.176 2.113,11.176 2.405,11.469 C2.698,11.762 2.698,12.237 2.405,12.530 L1.280,13.655 C1.134,13.801 0.942,13.874 0.750,13.874 C0.558,13.874 0.366,13.801 0.220,13.655 C-0.073,13.362 -0.073,12.887 0.220,12.594 L1.345,11.469 ZM5.470,11.469 C5.763,11.176 6.238,11.176 6.531,11.469 C6.824,11.762 6.824,12.237 6.531,12.530 L4.656,14.405 C4.509,14.551 4.317,14.624 4.125,14.624 C3.933,14.624 3.742,14.551 3.595,14.405 C3.302,14.112 3.302,13.637 3.595,13.344 L5.470,11.469 ZM5.470,15.594 C5.763,15.301 6.238,15.301 6.531,15.594 C6.824,15.887 6.824,16.362 6.531,16.655 L5.406,17.780 C5.259,17.927 5.068,18.000 4.875,18.000 C4.683,18.000 4.492,17.927 4.345,17.780 C4.052,17.487 4.052,17.012 4.345,16.719 L5.470,15.594 Z"/>
                                    </svg>
                                    <span>Campaigns</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <svg width="19px" height="16px">
                                        <path d="M15.038,7.605 C15.835,6.862 16.304,5.885 16.364,4.830 C16.429,3.694 16.014,2.603 15.196,1.758 C13.673,0.185 11.140,-0.107 9.253,1.056 C7.196,-0.214 4.402,0.262 2.968,2.147 C1.679,3.845 1.902,6.148 3.462,7.605 C1.465,8.677 0.241,10.647 0.250,12.802 L0.250,14.556 C0.250,14.973 0.615,15.312 1.064,15.312 L17.436,15.312 C17.885,15.312 18.250,14.973 18.250,14.556 L18.250,12.803 C18.259,10.647 17.035,8.677 15.038,7.605 ZM13.183,12.243 C13.180,12.209 13.175,12.176 13.170,12.142 C13.167,12.122 13.165,12.102 13.162,12.080 C13.142,11.925 13.121,11.799 13.097,11.684 C13.085,11.629 13.073,11.574 13.060,11.518 C13.029,11.384 12.993,11.250 12.952,11.119 C12.947,11.103 12.942,11.088 12.938,11.072 C12.929,11.044 12.921,11.017 12.912,10.989 C12.730,10.450 12.467,9.938 12.129,9.466 L12.106,9.434 C11.995,9.281 11.875,9.132 11.750,8.990 L11.745,8.983 C11.713,8.947 11.682,8.911 11.649,8.876 C11.685,8.877 11.721,8.878 11.757,8.878 L11.793,8.878 C11.965,8.877 12.139,8.866 12.310,8.847 C12.351,8.842 12.390,8.836 12.427,8.830 L12.470,8.824 C12.609,8.804 12.748,8.778 12.884,8.746 L12.916,8.739 C12.944,8.732 12.973,8.726 13.000,8.719 C13.155,8.680 13.309,8.632 13.459,8.578 C15.362,9.225 16.631,10.914 16.622,12.802 L16.622,13.800 L13.213,13.800 L13.213,12.802 C13.213,12.629 13.203,12.446 13.183,12.243 ZM12.986,7.118 C12.948,7.134 12.910,7.149 12.872,7.164 L12.848,7.174 C12.702,7.228 12.550,7.272 12.398,7.304 C12.383,7.307 12.369,7.309 12.354,7.311 C12.339,7.314 12.323,7.316 12.308,7.319 C12.136,7.349 11.961,7.366 11.788,7.368 C11.710,7.368 11.629,7.362 11.553,7.356 L11.536,7.355 C11.513,7.355 11.492,7.355 11.478,7.352 L11.463,7.350 C11.125,7.313 10.799,7.224 10.492,7.084 C10.486,7.081 10.480,7.079 10.475,7.077 C10.718,6.759 10.912,6.412 11.053,6.045 L11.073,5.996 L11.074,5.992 C11.149,5.788 11.207,5.577 11.248,5.365 C11.254,5.336 11.258,5.308 11.263,5.277 L11.264,5.272 C11.302,5.056 11.322,4.836 11.323,4.615 C11.322,4.396 11.301,4.176 11.264,3.962 L11.260,3.936 C11.256,3.914 11.253,3.893 11.248,3.868 C11.207,3.656 11.149,3.445 11.074,3.241 L11.054,3.189 C10.911,2.817 10.714,2.467 10.467,2.145 C10.871,1.961 11.317,1.864 11.769,1.864 L11.769,1.864 C11.770,1.864 11.771,1.864 11.772,1.864 C13.402,1.864 14.730,3.094 14.732,4.609 C14.733,5.689 14.048,6.674 12.986,7.118 ZM9.633,4.068 C9.635,4.079 9.636,4.089 9.639,4.102 C9.714,4.445 9.714,4.792 9.639,5.136 C9.636,5.147 9.635,5.157 9.633,5.168 C9.632,5.173 9.632,5.178 9.630,5.185 C9.595,5.335 9.546,5.483 9.482,5.628 C9.477,5.640 9.472,5.653 9.467,5.665 C9.460,5.684 9.452,5.703 9.444,5.720 C9.383,5.848 9.309,5.973 9.226,6.092 L9.205,6.122 C9.187,6.149 9.170,6.174 9.152,6.197 C9.067,6.309 8.973,6.415 8.872,6.514 C8.843,6.541 8.811,6.571 8.769,6.608 C8.529,6.821 8.253,6.993 7.951,7.121 C7.900,7.142 7.855,7.160 7.811,7.174 L7.804,7.176 C7.662,7.229 7.514,7.271 7.365,7.303 C7.345,7.307 7.321,7.310 7.296,7.314 C7.282,7.316 7.267,7.318 7.250,7.321 C7.090,7.348 6.926,7.364 6.766,7.366 L6.700,7.366 C6.537,7.364 6.373,7.349 6.210,7.320 C6.195,7.318 6.181,7.316 6.166,7.314 C6.141,7.310 6.118,7.307 6.098,7.303 C5.949,7.271 5.801,7.229 5.658,7.176 C5.620,7.162 5.582,7.148 5.545,7.133 L5.508,7.120 C4.452,6.675 3.769,5.693 3.767,4.616 L3.767,4.615 C3.765,3.882 4.071,3.192 4.628,2.673 C5.184,2.153 5.926,1.866 6.715,1.864 C6.718,1.864 6.721,1.864 6.723,1.864 C7.490,1.864 8.216,2.135 8.769,2.627 C8.799,2.655 8.835,2.687 8.871,2.721 C8.972,2.820 9.067,2.927 9.152,3.039 C9.170,3.062 9.187,3.087 9.206,3.114 L9.227,3.145 C9.309,3.263 9.383,3.388 9.444,3.515 C9.452,3.534 9.460,3.553 9.467,3.571 C9.472,3.584 9.477,3.596 9.483,3.612 C9.545,3.753 9.595,3.901 9.631,4.054 C9.632,4.059 9.632,4.064 9.633,4.068 ZM5.038,8.579 C6.118,8.978 7.343,8.978 8.423,8.580 C8.602,8.643 8.778,8.717 8.949,8.800 C9.056,8.851 9.157,8.909 9.263,8.970 L9.358,9.025 C9.425,9.063 9.488,9.099 9.548,9.139 C9.675,9.222 9.794,9.315 9.883,9.385 C9.962,9.449 10.028,9.503 10.089,9.556 C10.179,9.635 10.272,9.725 10.373,9.831 C10.444,9.907 10.506,9.975 10.561,10.042 C10.646,10.143 10.720,10.238 10.787,10.334 C10.846,10.416 10.900,10.503 10.956,10.595 C11.020,10.698 11.074,10.793 11.122,10.887 C11.172,10.987 11.217,11.098 11.261,11.206 L11.287,11.268 C11.318,11.344 11.348,11.416 11.372,11.488 C11.413,11.616 11.442,11.748 11.473,11.890 C11.480,11.920 11.488,11.950 11.496,11.980 C11.509,12.032 11.521,12.081 11.529,12.128 C11.565,12.351 11.583,12.578 11.584,12.802 L11.584,13.800 L1.878,13.800 L1.878,12.801 C1.869,10.916 3.136,9.227 5.038,8.579 Z"/>
                                    </svg>
                                    <span>Agency</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <svg width="19px" height="18px">
                                        <path d="M16.015,6.139 C15.911,6.304 15.734,6.412 15.532,6.436 C15.330,6.460 15.131,6.395 14.986,6.259 L14.717,6.004 L12.078,8.497 L12.997,9.365 C14.452,9.025 16.004,9.431 17.066,10.434 C17.734,11.065 18.152,11.864 18.275,12.746 C18.392,13.589 18.222,14.467 17.794,15.216 C17.696,15.388 17.516,15.508 17.311,15.536 C17.106,15.564 16.897,15.499 16.750,15.361 L14.802,13.520 C14.653,13.380 14.412,13.380 14.263,13.520 C14.192,13.588 14.152,13.678 14.152,13.774 C14.152,13.871 14.192,13.961 14.263,14.029 L16.212,15.869 C16.358,16.007 16.428,16.205 16.398,16.398 C16.368,16.592 16.241,16.763 16.059,16.855 C15.429,17.176 14.714,17.343 14.000,17.343 C13.813,17.343 13.625,17.332 13.440,17.308 C12.508,17.192 11.663,16.797 10.996,16.167 C9.934,15.164 9.504,13.698 9.864,12.324 L9.680,12.150 L4.982,16.587 C3.916,17.594 2.181,17.594 1.115,16.587 C0.597,16.098 0.312,15.450 0.312,14.760 C0.312,14.071 0.597,13.423 1.115,12.934 L5.812,8.497 L5.628,8.323 C4.173,8.663 2.621,8.257 1.559,7.254 C0.891,6.623 0.473,5.823 0.350,4.942 C0.233,4.098 0.403,3.221 0.830,2.472 C0.929,2.300 1.109,2.180 1.314,2.152 C1.518,2.123 1.728,2.189 1.874,2.327 L3.823,4.167 C3.895,4.235 3.990,4.273 4.092,4.273 C4.194,4.273 4.290,4.235 4.361,4.167 C4.433,4.100 4.473,4.009 4.473,3.913 C4.473,3.817 4.433,3.727 4.361,3.659 L2.413,1.819 C2.267,1.680 2.197,1.482 2.227,1.289 C2.257,1.096 2.384,0.925 2.566,0.832 C3.361,0.428 4.291,0.267 5.185,0.379 C6.117,0.496 6.962,0.891 7.629,1.521 C8.691,2.524 9.121,3.990 8.761,5.364 L9.679,6.232 L12.319,3.739 L12.049,3.485 C11.905,3.349 11.837,3.161 11.862,2.969 C11.887,2.778 12.001,2.612 12.176,2.513 L15.847,0.432 C16.107,0.285 16.437,0.324 16.651,0.526 L18.119,1.913 C18.333,2.115 18.374,2.427 18.218,2.671 L16.015,6.139 ZM2.045,13.813 C1.776,14.067 1.628,14.403 1.628,14.761 C1.628,15.118 1.776,15.455 2.045,15.709 C2.598,16.231 3.498,16.231 4.052,15.709 L8.750,11.271 L6.742,9.375 L2.045,13.813 ZM7.553,5.980 C7.375,5.812 7.314,5.557 7.399,5.333 C7.782,4.314 7.508,3.163 6.699,2.399 C5.999,1.738 5.032,1.458 4.073,1.630 L5.291,2.780 C5.953,3.405 5.953,4.421 5.291,5.046 C4.630,5.671 3.554,5.671 2.893,5.046 L1.675,3.895 C1.493,4.801 1.789,5.714 2.489,6.375 C3.298,7.139 4.517,7.399 5.595,7.036 C5.666,7.012 5.741,7.001 5.814,7.001 C5.986,7.001 6.156,7.064 6.281,7.182 L11.072,11.707 C11.250,11.876 11.311,12.130 11.226,12.355 C10.843,13.373 11.117,14.525 11.926,15.288 C12.626,15.950 13.593,16.229 14.552,16.058 L13.333,14.907 C12.672,14.283 12.672,13.266 13.333,12.642 C13.995,12.017 15.071,12.017 15.732,12.642 L16.950,13.792 C17.132,12.887 16.836,11.974 16.136,11.312 C15.327,10.548 14.108,10.289 13.030,10.652 C12.792,10.731 12.523,10.674 12.344,10.506 L7.553,5.980 ZM10.610,7.110 L11.148,7.619 L13.787,5.126 L13.249,4.617 L10.610,7.110 ZM16.084,1.747 L13.575,3.169 L15.321,4.818 L16.826,2.448 L16.084,1.747 ZM7.300,10.843 C7.556,11.085 7.556,11.479 7.300,11.722 L4.127,14.718 C3.999,14.839 3.830,14.900 3.662,14.900 C3.493,14.900 3.325,14.839 3.197,14.718 C2.941,14.476 2.941,14.082 3.197,13.840 L6.370,10.843 C6.626,10.601 7.043,10.601 7.300,10.843 Z"/>
                                    </svg>
                                    <span>Tootkit</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <svg width="18px" height="18px">
                                        <path d="M9.352,18.000 L8.648,18.000 C7.485,18.000 6.539,17.054 6.539,15.891 L6.539,15.536 C6.539,15.443 6.480,15.359 6.390,15.321 L6.377,15.316 C6.286,15.278 6.184,15.296 6.118,15.362 L5.868,15.613 C5.469,16.011 4.940,16.230 4.376,16.230 C3.813,16.230 3.283,16.011 2.885,15.613 L2.387,15.115 C1.989,14.717 1.770,14.187 1.770,13.624 C1.770,13.060 1.989,12.531 2.387,12.132 L2.638,11.882 C2.704,11.816 2.722,11.714 2.684,11.623 L2.679,11.610 C2.641,11.520 2.557,11.461 2.464,11.461 L2.109,11.461 C0.946,11.461 -0.000,10.515 -0.000,9.351 L-0.000,8.648 C-0.000,7.485 0.946,6.539 2.109,6.539 L2.463,6.539 C2.557,6.539 2.641,6.480 2.679,6.390 L2.684,6.377 C2.722,6.285 2.704,6.184 2.638,6.118 L2.387,5.868 C1.989,5.469 1.770,4.940 1.770,4.376 C1.770,3.813 1.989,3.283 2.387,2.885 L2.885,2.387 C3.283,1.989 3.813,1.770 4.376,1.770 C4.940,1.770 5.469,1.989 5.868,2.387 L6.118,2.638 C6.184,2.704 6.285,2.722 6.377,2.684 L6.390,2.679 C6.480,2.641 6.539,2.557 6.539,2.463 L6.539,2.109 C6.539,0.946 7.485,-0.000 8.648,-0.000 L9.352,-0.000 C10.515,-0.000 11.461,0.946 11.461,2.109 L11.461,2.463 C11.461,2.557 11.520,2.641 11.610,2.679 L11.623,2.684 C11.714,2.722 11.816,2.704 11.882,2.638 L12.132,2.387 C12.531,1.989 13.060,1.770 13.624,1.770 C14.187,1.770 14.717,1.989 15.115,2.387 L15.613,2.885 C16.011,3.283 16.230,3.813 16.230,4.376 C16.230,4.939 16.011,5.469 15.613,5.868 L15.362,6.118 C15.296,6.184 15.278,6.285 15.316,6.377 L15.321,6.389 C15.359,6.480 15.443,6.539 15.536,6.539 L15.891,6.539 C17.054,6.539 18.000,7.485 18.000,8.648 L18.000,9.351 C18.000,10.314 17.349,11.155 16.417,11.394 C16.041,11.491 15.658,11.265 15.561,10.889 C15.464,10.513 15.691,10.129 16.067,10.032 C16.377,9.953 16.594,9.673 16.594,9.351 L16.594,8.648 C16.594,8.261 16.278,7.945 15.891,7.945 L15.536,7.945 C14.872,7.945 14.277,7.545 14.022,6.926 L14.016,6.914 C13.760,6.297 13.898,5.594 14.368,5.124 L14.618,4.873 C14.751,4.741 14.824,4.564 14.824,4.376 C14.824,4.188 14.751,4.012 14.618,3.879 L14.121,3.382 C13.988,3.249 13.812,3.176 13.624,3.176 C13.436,3.176 13.259,3.249 13.127,3.382 L12.876,3.632 C12.406,4.102 11.703,4.239 11.084,3.982 L11.073,3.978 C10.455,3.723 10.055,3.128 10.055,2.463 L10.055,2.109 C10.055,1.722 9.739,1.406 9.352,1.406 L8.648,1.406 C8.261,1.406 7.945,1.722 7.945,2.109 L7.945,2.463 C7.945,3.128 7.545,3.723 6.926,3.978 L6.916,3.982 C6.297,4.240 5.594,4.102 5.124,3.632 L4.873,3.382 C4.741,3.249 4.564,3.176 4.376,3.176 C4.188,3.176 4.012,3.249 3.879,3.382 L3.382,3.879 C3.249,4.012 3.176,4.188 3.176,4.376 C3.176,4.564 3.249,4.741 3.382,4.873 L3.632,5.124 C4.102,5.594 4.240,6.297 3.983,6.916 L3.978,6.926 C3.723,7.545 3.128,7.945 2.463,7.945 L2.109,7.945 C1.722,7.945 1.406,8.261 1.406,8.648 L1.406,9.351 C1.406,9.739 1.722,10.055 2.109,10.055 L2.463,10.055 C3.128,10.055 3.723,10.455 3.978,11.073 L3.983,11.084 C4.240,11.703 4.102,12.406 3.632,12.876 L3.382,13.127 C3.249,13.259 3.176,13.436 3.176,13.624 C3.176,13.812 3.249,13.988 3.382,14.121 L3.879,14.618 C4.012,14.751 4.188,14.824 4.376,14.824 C4.564,14.824 4.740,14.751 4.873,14.618 L5.124,14.368 C5.594,13.898 6.297,13.760 6.916,14.017 L6.926,14.022 C7.545,14.277 7.945,14.872 7.945,15.536 L7.945,15.891 C7.945,16.278 8.261,16.594 8.648,16.594 L9.352,16.594 C9.660,16.594 9.930,16.396 10.023,16.102 C10.139,15.731 10.534,15.525 10.904,15.642 C11.275,15.758 11.481,16.153 11.364,16.523 C11.087,17.406 10.278,18.000 9.352,18.000 ZM17.397,17.362 C17.786,16.974 18.000,16.457 18.000,15.908 C18.000,15.358 17.786,14.842 17.397,14.453 C17.397,14.453 17.397,14.452 17.396,14.452 L12.837,9.912 C13.048,9.453 13.183,8.923 13.184,8.496 C13.185,7.586 12.834,6.753 12.168,6.088 C11.354,5.273 10.115,4.787 8.853,4.787 C8.851,4.787 8.848,4.787 8.845,4.787 C8.437,4.788 8.049,4.855 7.624,4.999 C7.394,5.076 7.221,5.266 7.165,5.501 C7.108,5.736 7.177,5.984 7.346,6.157 L9.040,7.886 L8.828,8.799 L7.931,9.002 L6.211,7.279 C6.040,7.107 5.791,7.035 5.554,7.090 C5.318,7.145 5.126,7.319 5.048,7.549 C4.897,7.995 4.823,8.407 4.822,8.810 C4.820,9.858 5.149,10.906 5.724,11.685 C6.419,12.629 7.414,13.148 8.525,13.148 C8.527,13.148 8.529,13.148 8.531,13.148 C8.919,13.148 9.462,13.038 9.946,12.828 L14.488,17.362 C14.877,17.751 15.393,17.965 15.943,17.965 C16.492,17.965 17.009,17.751 17.397,17.362 ZM9.662,11.387 C9.371,11.596 8.831,11.742 8.529,11.742 C7.689,11.743 7.156,11.258 6.856,10.851 C6.546,10.431 6.340,9.892 6.262,9.320 L7.210,10.270 C7.381,10.442 7.628,10.513 7.863,10.459 L9.569,10.073 C9.832,10.013 10.038,9.808 10.099,9.546 L10.497,7.829 C10.551,7.595 10.483,7.349 10.315,7.178 L9.389,6.233 C10.087,6.336 10.729,6.637 11.174,7.082 C11.575,7.483 11.778,7.958 11.777,8.494 C11.777,8.775 11.612,9.316 11.392,9.620 C11.189,9.900 11.221,10.287 11.466,10.531 L16.403,15.448 C16.526,15.570 16.594,15.734 16.594,15.908 C16.594,16.081 16.526,16.245 16.403,16.368 C16.280,16.491 16.117,16.558 15.943,16.558 C15.769,16.558 15.606,16.491 15.482,16.367 L10.568,11.461 C10.432,11.325 10.252,11.256 10.071,11.256 C9.928,11.256 9.785,11.299 9.662,11.387 Z"/>
                                    </svg>
                                    <span>Settings</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <svg width="18px" height="17px">
                                        <path d="M17.186,9.129 C16.736,9.129 16.370,8.779 16.370,8.349 L16.370,5.072 C16.370,4.901 16.332,4.735 16.257,4.580 C16.167,4.395 16.156,4.186 16.227,3.993 C16.302,3.792 16.455,3.632 16.660,3.544 C17.067,3.367 17.551,3.538 17.739,3.925 C17.914,4.287 18.003,4.673 18.003,5.072 L18.003,8.349 C18.003,8.779 17.637,9.129 17.186,9.129 ZM17.186,10.849 C17.637,10.849 18.003,11.197 18.003,11.627 C18.003,13.141 16.704,14.373 15.107,14.373 L9.822,14.373 L9.822,15.433 L12.126,15.433 C12.576,15.433 12.942,15.782 12.942,16.212 C12.942,16.642 12.576,16.991 12.126,16.991 L5.886,16.991 C5.436,16.991 5.070,16.642 5.070,16.212 C5.070,15.782 5.436,15.433 5.886,15.433 L8.189,15.433 L8.189,14.373 L2.905,14.373 C1.309,14.373 0.009,13.141 0.009,11.627 L0.009,5.072 C0.009,4.672 0.098,4.286 0.274,3.925 C0.461,3.538 0.947,3.367 1.352,3.544 C1.556,3.632 1.710,3.792 1.784,3.994 C1.856,4.187 1.845,4.395 1.755,4.580 C1.680,4.735 1.642,4.901 1.642,5.072 L1.642,11.627 C1.642,12.282 2.209,12.815 2.905,12.815 L15.107,12.815 C15.803,12.815 16.370,12.282 16.370,11.627 C16.370,11.197 16.736,10.849 17.186,10.849 ZM14.615,4.081 L13.123,4.587 C13.260,5.026 13.497,6.051 13.497,7.891 C13.497,8.294 13.180,8.627 12.759,8.666 C12.744,8.668 11.167,8.830 9.588,9.715 C9.457,9.819 9.272,9.883 9.082,9.883 C8.878,9.883 8.693,9.819 8.547,9.705 C6.970,8.822 5.407,8.668 5.392,8.666 C4.971,8.627 4.654,8.294 4.654,7.891 C4.654,6.046 4.892,5.022 5.029,4.583 L4.173,4.295 L4.173,5.629 C4.173,6.059 3.806,6.408 3.356,6.408 C2.906,6.408 2.540,6.059 2.540,5.629 L2.540,2.778 C2.540,2.670 2.562,2.566 2.607,2.468 C2.737,2.093 3.077,1.782 3.537,1.627 L7.775,0.179 C8.609,-0.105 9.567,-0.106 10.405,0.179 L14.617,1.628 C15.230,1.835 15.611,2.305 15.611,2.854 C15.611,3.402 15.229,3.872 14.615,4.081 ZM6.298,7.235 C6.997,7.377 8.011,7.657 9.075,8.203 C10.139,7.657 11.154,7.377 11.852,7.235 C11.810,6.067 11.661,5.397 11.580,5.110 L10.405,5.508 C9.571,5.791 8.609,5.791 7.776,5.508 L6.572,5.103 C6.490,5.391 6.340,6.063 6.298,7.235 ZM9.853,1.645 C9.376,1.483 8.803,1.483 8.324,1.646 L7.289,1.999 L9.137,1.999 C9.587,1.999 9.953,2.349 9.953,2.778 C9.953,3.207 9.587,3.557 9.137,3.557 L6.886,3.557 L8.322,4.040 C8.803,4.203 9.378,4.203 9.857,4.041 L13.363,2.852 L9.853,1.645 Z"/>
                                    </svg>
                                    <span>Training</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <svg width="18px" height="19px">
                                        <path d="M17.998,8.608 C17.927,3.840 13.932,-0.000 9.000,-0.000 C4.070,-0.000 0.074,3.838 0.002,8.608 C-0.000,8.689 0.002,8.670 0.001,11.516 C0.001,12.635 0.938,13.545 2.091,13.545 L2.091,13.545 C3.244,13.545 4.181,12.635 4.181,11.516 L4.181,8.670 C4.181,7.551 3.244,6.640 2.091,6.640 C2.007,6.640 1.925,6.646 1.844,6.655 C2.768,3.667 5.626,1.484 9.000,1.484 C12.374,1.484 15.233,3.667 16.157,6.655 C16.076,6.646 15.993,6.640 15.910,6.640 C14.757,6.640 13.819,7.551 13.819,8.670 L13.819,11.516 C13.819,12.635 14.757,13.545 15.910,13.545 L15.910,13.545 C15.930,13.545 15.950,13.544 15.970,13.544 C15.207,14.995 13.652,15.991 11.862,15.991 L11.205,15.991 C10.888,15.105 10.020,14.466 9.000,14.466 C7.713,14.466 6.666,15.483 6.666,16.733 C6.666,17.983 7.713,19.000 9.000,19.000 C10.020,19.000 10.888,18.362 11.205,17.475 L11.862,17.475 C15.246,17.475 18.000,14.802 18.000,11.516 L18.000,11.516 L18.000,8.670 C18.000,8.649 17.999,8.628 17.998,8.608 ZM2.091,8.125 C2.401,8.125 2.653,8.369 2.653,8.670 L2.653,11.516 C2.653,11.816 2.401,12.061 2.091,12.061 L2.091,12.061 C1.781,12.061 1.529,11.816 1.529,11.516 C1.530,9.631 1.528,8.848 1.531,8.647 C1.543,8.357 1.789,8.125 2.091,8.125 ZM9.000,17.516 C8.556,17.516 8.195,17.165 8.195,16.733 C8.195,16.302 8.556,15.951 9.000,15.951 C9.445,15.951 9.806,16.302 9.806,16.733 C9.806,17.165 9.445,17.516 9.000,17.516 ZM16.471,11.516 C16.471,11.816 16.219,12.061 15.910,12.061 L15.910,12.061 C15.600,12.061 15.348,11.816 15.348,11.516 L15.348,8.670 C15.348,8.369 15.600,8.125 15.910,8.125 C16.212,8.125 16.458,8.357 16.470,8.647 C16.472,8.825 16.470,8.609 16.471,11.516 Z"/>
                                    </svg>
                                    <span>Support</span>
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <Link href="/">
                        <a className={`${styles.logout}`}>
                            <svg width="24px" height="18px">
                                <path d="M15.076,18.000 C12.107,18.000 9.341,16.517 7.677,14.033 C7.340,13.529 7.471,12.845 7.970,12.505 C8.470,12.165 9.148,12.297 9.485,12.801 C10.743,14.678 12.833,15.799 15.076,15.799 C18.794,15.799 21.818,12.749 21.818,9.000 C21.818,5.251 18.794,2.200 15.076,2.200 C12.826,2.200 10.733,3.326 9.476,5.212 C9.140,5.717 8.462,5.851 7.962,5.512 C7.462,5.173 7.329,4.489 7.665,3.985 C9.328,1.490 12.099,-0.000 15.076,-0.000 C19.997,-0.000 24.000,4.037 24.000,9.000 C24.000,13.963 19.997,18.000 15.076,18.000 ZM3.725,7.900 L16.363,7.900 C16.966,7.900 17.454,8.392 17.454,9.000 C17.454,9.607 16.966,10.100 16.363,10.100 L3.725,10.100 L5.135,11.523 C5.561,11.952 5.561,12.649 5.135,13.079 C4.922,13.294 4.643,13.401 4.364,13.401 C4.084,13.401 3.805,13.294 3.592,13.079 L0.320,9.778 C0.294,9.753 0.271,9.726 0.248,9.698 C0.242,9.691 0.238,9.684 0.232,9.677 C0.216,9.656 0.199,9.634 0.184,9.612 C0.180,9.605 0.176,9.598 0.172,9.592 C0.157,9.568 0.142,9.544 0.129,9.519 C0.127,9.514 0.124,9.509 0.122,9.505 C0.108,9.477 0.095,9.450 0.083,9.422 C0.082,9.418 0.081,9.415 0.080,9.412 C0.068,9.382 0.057,9.351 0.047,9.321 C0.046,9.317 0.046,9.313 0.044,9.309 C0.036,9.279 0.028,9.248 0.021,9.216 C0.020,9.207 0.019,9.198 0.017,9.189 C0.013,9.163 0.008,9.137 0.005,9.110 C0.002,9.073 -0.000,9.037 -0.000,9.000 C-0.000,8.963 0.002,8.926 0.005,8.890 C0.008,8.864 0.013,8.838 0.017,8.812 C0.019,8.802 0.020,8.793 0.021,8.783 C0.028,8.752 0.036,8.721 0.044,8.691 C0.046,8.687 0.046,8.683 0.047,8.679 C0.057,8.648 0.068,8.618 0.079,8.589 C0.081,8.585 0.082,8.582 0.083,8.578 C0.095,8.550 0.108,8.523 0.122,8.496 C0.124,8.491 0.127,8.486 0.129,8.481 C0.142,8.456 0.157,8.432 0.172,8.408 C0.176,8.402 0.180,8.395 0.184,8.388 C0.199,8.366 0.216,8.344 0.232,8.323 C0.238,8.316 0.242,8.308 0.248,8.302 C0.271,8.274 0.294,8.247 0.320,8.222 L3.592,4.921 C4.018,4.491 4.709,4.491 5.135,4.921 C5.561,5.351 5.561,6.048 5.135,6.477 L3.725,7.900 Z"/>
                            </svg>
                            <span>Logout</span>
                        </a>
                    </Link>
            </div>
        </>
    );
}

export default Sidebar;