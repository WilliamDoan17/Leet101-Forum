export const solutions = [
  // ===== ARRAY SOLUTIONS =====
  
  // Easy (15)
  {
    problemName: "Two Sum",
    author: "Algorithm Master",
    explanation: "Use a hash map to store numbers and their indices. For each number, calculate its complement (target - current) and check if it exists in the map. This avoids O(n²) brute force.",
    solution: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "CodeReviewer42",
        content: "Elegant solution! Hash map eliminates nested loops. Each lookup is O(1).",
      },
      {
        author: "PythonFan",
        content: "In Python, this can be done even more concisely with enumerate() and dictionary.",
      },
      {
        author: "NewCoder",
        content: "What if there are duplicate numbers? The hash map approach handles this well since we store indices.",
      },
      {
        author: "OptimizationExpert",
        content: "Consider adding an early return if no solution is possible, though the problem guarantees exactly one solution.",
      }
    ]
  },

  {
    problemName: "Best Time to Buy and Sell Stock",
    author: "Trading Pro",
    explanation: "Track the minimum price seen so far and calculate maximum profit by comparing current price with minimum.",
    solution: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;
        
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "StockTrader",
        content: "Clean one-pass solution! This is essentially Kadane's algorithm for maximum subarray.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "Note that we can only buy once and sell once. For multiple transactions, we'd need a different approach.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of INT_MAX to initialize minPrice. Makes the first comparison always true.",
      },
      {
        author: "PythonDev",
        content: "In Python, we can use float('inf') instead of INT_MAX for similar initialization."
      }
    ]
  },

  {
    problemName: "Contains Duplicate",
    author: "Set Master",
    explanation: "Use a hash set to track seen numbers. If we encounter a number already in the set, we found a duplicate.",
    solution: `class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int num : nums) {
            if (seen.find(num) != seen.end()) {
                return true;
            }
            seen.insert(num);
        }
        return false;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "SetExpert",
        content: "Hash set provides O(1) lookups on average. Much better than sorting which would be O(n log n).",
      },
      {
        author: "MemoryOptimizer",
        content: "We could also sort and check adjacent elements for O(1) space, but O(n log n) time.",
      },
      {
        author: "PythonFan",
        content: "In Python, this is one line: return len(nums) != len(set(nums))",
      },
      {
        author: "BigOAnalyst",
        content: "For very large n, the hash set might have collisions but average case is still O(n)."
      }
    ]
  },

  {
    problemName: "Remove Duplicates from Sorted Array",
    author: "Two Pointer Pro",
    explanation: "Use two pointers - one for the current position to place unique elements, and one to iterate through the array.",
    solution: `class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;
        
        int i = 0;
        for (int j = 1; j < nums.size(); j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "PointerMaster",
        content: "Classic two-pointer technique! i tracks the last unique element position.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Good check for empty array at the beginning. Always important for robustness.",
      },
      {
        author: "AlgorithmTeacher",
        content: "This works because the array is sorted. For unsorted array, we'd need a different approach.",
      },
      {
        author: "CodeStyleGuru",
        content: "Clean and efficient. The in-place modification is exactly what the problem asks for."
      }
    ]
  },

  {
    problemName: "Move Zeroes",
    author: "Array Manipulator",
    explanation: "Use two pointers - one to find non-zero elements and one to place them in order, then fill remaining positions with zeroes.",
    solution: `class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int nonZeroIndex = 0;
        
        // Move all non-zero elements to the front
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                nums[nonZeroIndex++] = nums[i];
            }
        }
        
        // Fill remaining positions with zeroes
        for (int i = nonZeroIndex; i < nums.size(); i++) {
            nums[i] = 0;
        }
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "OptimizationExpert",
        content: "Efficient two-pass solution! First pass collects non-zeroes, second pass fills zeroes.",
      },
      {
        author: "OnePassFan",
        content: "We could also do this in one pass with a swap operation, but this is more readable.",
      },
      {
        author: "CodeReviewer42",
        content: "Good variable naming - nonZeroIndex clearly indicates its purpose.",
      },
      {
        author: "PythonDev",
        content: "In Python, we can use list comprehension: nums[:] = [x for x in nums if x != 0] + [0]*nums.count(0)"
      }
    ]
  },

  {
    problemName: "Plus One",
    author: "Digit Expert",
    explanation: "Start from the end and handle carry. If all digits become 9, we need to add an extra digit at the beginning.",
    solution: `class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size();
        
        for (int i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        
        // If we're here, all digits were 9
        digits.insert(digits.begin(), 1);
        return digits;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "MathWizard",
        content: "Smart approach! Handles the carry propagation elegantly without extra variables.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Good handling of the edge case where all digits are 9 and we need to add a new digit.",
      },
      {
        author: "CodeSimplicity",
        content: "The early return when digits[i] < 9 makes this very efficient for most cases.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also convert to number and back, but that might cause overflow for large arrays."
      }
    ]
  },

  {
    problemName: "Single Number",
    author: "Bit Manipulation Guru",
    explanation: "Use XOR operation. Since a XOR a = 0 and a XOR 0 = a, all duplicate numbers cancel out, leaving the single number.",
    solution: `class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num;
        }
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "BitMaster",
        content: "Beautiful bit manipulation! XOR is perfect for this problem.",
      },
      {
        author: "MathGeek",
        content: "This works because XOR is commutative and associative. The order doesn't matter.",
      },
      {
        author: "MemoryOptimizer",
        content: "O(1) space solution! No extra data structures needed.",
      },
      {
        author: "PythonFan",
        content: "In Python, we can use reduce from functools: return reduce(lambda x, y: x ^ y, nums)"
      }
    ]
  },

  {
    problemName: "Intersection of Two Arrays II",
    author: "Hash Map Specialist",
    explanation: "Use a hash map to count frequencies of numbers in the smaller array, then iterate through the other array to find common elements.",
    solution: `class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        if (nums1.size() > nums2.size()) {
            return intersect(nums2, nums1);
        }
        
        unordered_map<int, int> freq;
        vector<int> result;
        
        // Count frequencies in smaller array
        for (int num : nums1) {
            freq[num]++;
        }
        
        // Find common elements
        for (int num : nums2) {
            if (freq.find(num) != freq.end() && freq[num] > 0) {
                result.push_back(num);
                freq[num]--;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n + m), Space: O(min(n, m))",
    comments: [
      {
        author: "OptimizationExpert",
        content: "Smart to process the smaller array first to minimize space usage!",
      },
      {
        author: "AlternativeSolver",
        content: "We could also sort both arrays and use two pointers for O(1) space (but O(n log n) time).",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of frequency counting to handle duplicates correctly.",
      },
      {
        author: "BigOAnalyst",
        content: "Space complexity is O(min(n,m)) which is optimal for this approach."
      }
    ]
  },

  {
    problemName: "Valid Sudoku",
    author: "Grid Validator",
    explanation: "Use three sets of hash sets to track seen numbers in rows, columns, and 3x3 sub-boxes.",
    solution: `class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        vector<unordered_set<char>> rows(9), cols(9), boxes(9);
        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char num = board[i][j];
                if (num == '.') continue;
                
                int boxIndex = (i / 3) * 3 + (j / 3);
                
                if (rows[i].count(num) || cols[j].count(num) || boxes[boxIndex].count(num)) {
                    return false;
                }
                
                rows[i].insert(num);
                cols[j].insert(num);
                boxes[boxIndex].insert(num);
            }
        }
        return true;
    }
};`,
    notes: "Time: O(1) since board is fixed 9x9, Space: O(1)",
    comments: [
      {
        author: "SudokuMaster",
        content: "Clean solution! The box index calculation is clever: (i/3)*3 + (j/3).",
      },
      {
        author: "SpaceOptimizer",
        content: "We could use bit masking to reduce space further, but this is more readable.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of empty cells with continue statement.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use arrays of booleans instead of sets for potentially better performance."
      }
    ]
  },

  {
    problemName: "Rotate Array",
    author: "Array Rotator",
    explanation: "Three-step reversal: reverse entire array, then reverse first k elements, then reverse remaining elements.",
    solution: `class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n; // Handle k larger than array size
        
        // Three-step reversal
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "AlgorithmMaster",
        content: "Elegant reversal technique! This is the classic O(1) space solution.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Important to handle k > n with modulo operation. Many forget this!",
      },
      {
        author: "AlternativeSolver",
        content: "We could also use extra array or cyclic replacements, but this is most space-efficient.",
      },
      {
        author: "CodeSimplicity",
        content: "Using STL reverse makes the code clean and readable."
      }
    ]
  },

  {
    problemName: "Find All Numbers Disappeared in an Array",
    author: "Marking Pro",
    explanation: "Use the array itself as a marker by making numbers negative at positions corresponding to seen numbers.",
    solution: `class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> result;
        
        // Mark positions as negative
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1;
            if (nums[index] > 0) {
                nums[index] = -nums[index];
            }
        }
        
        // Find positive numbers (indices of missing numbers)
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > 0) {
                result.push_back(i + 1);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "SpaceOptimizer",
        content: "Brilliant in-place marking! No extra space needed for tracking.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "This works because all numbers are between 1 and n, and array size is n.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of abs() to handle already negative numbers in the marking phase.",
      },
      {
        author: "PythonDev",
        content: "In Python, we'd need to be careful since we can't modify the array if it's given as immutable."
      }
    ]
  },

  {
    problemName: "Max Consecutive Ones",
    author: "Counter Expert",
    explanation: "Iterate through array, count consecutive ones, and track the maximum count.",
    solution: `class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int maxCount = 0;
        int currentCount = 0;
        
        for (int num : nums) {
            if (num == 1) {
                currentCount++;
                maxCount = max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }
        
        return maxCount;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SimplicityMaster",
        content: "Straightforward and efficient! Single pass with O(1) space.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of max() to avoid if-else for updating maxCount.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty array and all zeros correctly.",
      },
      {
        author: "PythonFan",
        content: "In Python, we could use groupby from itertools, but this is more readable."
      }
    ]
  },

  {
    problemName: "Reshape the Matrix",
    author: "Matrix Reshaper",
    explanation: "Flatten the matrix row by row, then fill the new matrix with the flattened elements.",
    solution: `class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = mat.size(), n = mat[0].size();
        
        // Check if reshape is possible
        if (m * n != r * c) {
            return mat;
        }
        
        vector<vector<int>> result(r, vector<int>(c));
        int index = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int newRow = index / c;
                int newCol = index % c;
                result[newRow][newCol] = mat[i][j];
                index++;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n) for result",
    comments: [
      {
        author: "MatrixMaster",
        content: "Clean index calculation using division and modulo!",
      },
      {
        author: "EdgeCaseHunter",
        content: "Important to check if reshape is possible at the beginning.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use a single loop with index conversion formulas.",
      },
      {
        author: "CodeReviewer42",
        content: "Good variable naming - m, n, r, c follow conventional matrix notation."
      }
    ]
  },

  {
    problemName: "Pascal's Triangle",
    author: "Math Generator",
    explanation: "Each row is generated by summing adjacent elements from the previous row, with 1s at the ends.",
    solution: `class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> triangle;
        
        for (int i = 0; i < numRows; i++) {
            vector<int> row(i + 1, 1); // Initialize with 1s
            
            // Calculate inner elements (skip first and last)
            for (int j = 1; j < i; j++) {
                row[j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
            
            triangle.push_back(row);
        }
        
        return triangle;
    }
};`,
    notes: "Time: O(n²), Space: O(n²)",
    comments: [
      {
        author: "MathWizard",
        content: "Perfect implementation of Pascal's triangle generation!",
      },
      {
        author: "CodeReviewer42",
        content: "Good initialization of each row with 1s, then filling inner elements.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles numRows = 0 correctly by returning empty vector.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use combinatorial formula with nCr, but this is more straightforward."
      }
    ]
  },

  {
    problemName: "Missing Number",
    author: "Math Genius",
    explanation: "Use Gauss formula: sum of first n numbers is n(n+1)/2. Subtract actual sum to find missing number.",
    solution: `class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        
        for (int num : nums) {
            actualSum += num;
        }
        
        return expectedSum - actualSum;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "MathGeek",
        content: "Clever use of mathematical formula! No extra space needed.",
      },
      {
        author: "AlternativeSolver",
        content: "We could also use XOR with all numbers from 0 to n, similar to Single Number problem.",
      },
      {
        author: "CodeReviewer42",
        content: "Simple and efficient. Handles overflow well for given constraints.",
      },
      {
        author: "PythonFan",
        content: "In Python, we could use: return sum(range(len(nums)+1)) - sum(nums)"
      }
    ]
  },

  // Medium (20)
  {
    problemName: "Product of Array Except Self",
    author: "Prefix-Suffix Master",
    explanation: "Use prefix and suffix products. First pass calculates left products, second pass calculates right products and combines.",
    solution: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 1);
        
        // Calculate left products
        int left = 1;
        for (int i = 0; i < n; i++) {
            result[i] = left;
            left *= nums[i];
        }
        
        // Calculate right products and combine
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "AlgorithmMaster",
        content: "Brilliant O(n) time and O(1) space solution! No division used.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean two-pass approach. First pass left products, second pass right products.",
      },
      {
        author: "SpaceOptimizer",
        content: "Using the result array for intermediate storage is smart.",
      },
      {
        author: "InterviewExpert",
        content: "This is a classic interview problem. Important to know both division and non-division solutions."
      }
    ]
  },

  {
    problemName: "Maximum Subarray",
    author: "Kadane's Algorithm Expert",
    explanation: "Kadane's algorithm: track current sum and maximum sum. Reset current sum when it becomes negative.",
    solution: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }
        
        return maxSum;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "AlgorithmHistorian",
        content: "Classic Kadane's algorithm! One of the most famous DP problems.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation. The key insight is resetting when current sum goes negative.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all negative arrays correctly by starting with first element.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use divide and conquer for O(n log n), but this is optimal."
      }
    ]
  },

  {
    problemName: "Maximum Product Subarray",
    author: "DP Specialist",
    explanation: "Track both maximum and minimum products at each position, since negative numbers can make minimum become maximum.",
    solution: `class Solution {
public:
    int maxProduct(vector<int>& nums) {
        if (nums.empty()) return 0;
        
        int maxProd = nums[0];
        int minProd = nums[0];
        int result = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] < 0) {
                swap(maxProd, minProd);
            }
            
            maxProd = max(nums[i], maxProd * nums[i]);
            minProd = min(nums[i], minProd * nums[i]);
            
            result = max(result, maxProd);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "DPExpert",
        content: "Smart to track both max and min! Negative numbers flip the relationship.",
      },
      {
        author: "CodeReviewer42",
        content: "The swap when encountering negative number is the key insight.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles zeros correctly since max() and min() will reset at zero.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also do two passes (forward and backward) to handle negative counts."
      }
    ]
  },

  {
    problemName: "Find Minimum in Rotated Sorted Array",
    author: "Binary Search Pro",
    explanation: "Modified binary search: compare mid element with right element to determine which side has the minimum.",
    solution: `class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[right]) {
                // Minimum is in right half
                left = mid + 1;
            } else {
                // Minimum is in left half (including mid)
                right = mid;
            }
        }
        
        return nums[left];
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchMaster",
        content: "Clean binary search adaptation for rotated array!",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of comparing with right element instead of left to handle duplicates.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles non-rotated array correctly (when nums[0] is minimum).",
      },
      {
        author: "AlternativeThinker",
        content: "We could also compare with left element, but comparing with right is more robust."
      }
    ]
  },

  {
    problemName: "Search in Rotated Sorted Array",
    author: "Rotation Searcher",
    explanation: "Modified binary search: first find which side is sorted, then check if target is in the sorted side.",
    solution: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            }
            
            // Check if left side is sorted
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else { // Right side is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Elegant solution! The key is determining which half is properly sorted.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of both cases: left sorted and right sorted.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single element and two element arrays correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could first find the pivot, then do binary search on the appropriate half."
      }
    ]
  },
  {
    problemName: "3Sum",
    author: "Two Pointer Master",
    explanation: "Sort the array, then for each element, use two pointers to find pairs that sum to -current element. Skip duplicates to avoid duplicate triplets.",
    solution: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        
        for (int i = 0; i < n - 2; i++) {
            // Skip duplicates
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            int left = i + 1, right = n - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.push_back({nums[i], nums[left], nums[right]});
                    // Skip duplicates
                    while (left < right && nums[left] == nums[left+1]) left++;
                    while (left < right && nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
};`,
    notes: "Time: O(n²), Space: O(1) excluding result",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Classic two-pointer approach after sorting! Handles duplicates elegantly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good duplicate skipping logic - both for the outer loop and inner pointers.",
      },
      {
        author: "OptimizationExpert",
        content: "Early termination could be added: if nums[i] > 0, break since sorted array.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set for O(n²) time with O(n) space, but sorting is more efficient."
      }
    ]
  },

  {
    problemName: "Container With Most Water",
    author: "Two Pointer Pro",
    explanation: "Use two pointers at both ends. Always move the pointer with smaller height, as that's the limiting factor.",
    solution: `class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int maxArea = 0;
        
        while (left < right) {
            int currentArea = min(height[left], height[right]) * (right - left);
            maxArea = max(maxArea, currentArea);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgoExpert",
        content: "Greedy approach works perfectly! Always move the shorter line inward.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean and intuitive. The area calculation is straightforward.",
      },
      {
        author: "ProofMaster",
        content: "This works because moving the longer line cannot increase the area, only moving shorter line might.",
      },
      {
        author: "AlternativeThinker",
        content: "Brute force would be O(n²), but this greedy approach gives O(n)."
      }
    ]
  },

  {
    problemName: "Merge Intervals",
    author: "Interval Master",
    explanation: "Sort intervals by start time, then merge overlapping intervals by comparing with the last merged interval.",
    solution: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.empty()) return {};
        
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> merged;
        merged.push_back(intervals[0]);
        
        for (int i = 1; i < intervals.size(); i++) {
            vector<int>& last = merged.back();
            if (intervals[i][0] <= last[1]) {
                // Overlapping, merge them
                last[1] = max(last[1], intervals[i][1]);
            } else {
                // Non-overlapping, add new interval
                merged.push_back(intervals[i]);
            }
        }
        
        return merged;
    }
};`,
    notes: "Time: O(n log n), Space: O(1) excluding result",
    comments: [
      {
        author: "SortingExpert",
        content: "Sorting makes the problem much easier! Then it's just linear merging.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of reference to the last merged interval for efficient updates.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty input and single interval correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use a sweep line algorithm, but sorting is simpler and efficient."
      }
    ]
  },

  {
    problemName: "Insert Interval",
    author: "Interval Inserter",
    explanation: "Three phases: add all intervals before new interval, merge overlapping intervals with new interval, add all intervals after.",
    solution: `class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> result;
        int i = 0, n = intervals.size();
        
        // Add all intervals before newInterval
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push_back(intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = min(newInterval[0], intervals[i][0]);
            newInterval[1] = max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.push_back(newInterval);
        
        // Add remaining intervals
        while (i < n) {
            result.push_back(intervals[i]);
            i++;
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "ThreePhaseExpert",
        content: "Clean three-phase approach! No sorting needed since intervals are already sorted.",
      },
      {
        author: "CodeReviewer42",
        content: "Efficient linear scan. Each interval is processed exactly once.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where newInterval is at beginning, middle, or end correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use binary search to find insertion point, but linear scan is simpler."
      }
    ]
  },

  {
    problemName: "Non-overlapping Intervals",
    author: "Greedy Interval Selector",
    explanation: "Sort by end time, then greedily select intervals. When conflict occurs, remove the interval with larger end time.",
    solution: `class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if (intervals.empty()) return 0;
        
        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[1] < b[1];
        });
        
        int count = 0;
        int lastEnd = intervals[0][1];
        
        for (int i = 1; i < intervals.size(); i++) {
            if (intervals[i][0] < lastEnd) {
                // Overlapping, remove current interval
                count++;
            } else {
                // Non-overlapping, update lastEnd
                lastEnd = intervals[i][1];
            }
        }
        
        return count;
    }
};`,
    notes: "Time: O(n log n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgorithmExpert",
        content: "Classic greedy interval scheduling! Always pick the interval that ends earliest.",
      },
      {
        author: "CodeReviewer42",
        content: "Smart to sort by end time rather than start time for this problem.",
      },
      {
        author: "ProofMaster",
        content: "This maximizes the number of non-overlapping intervals, which minimizes removals.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP for O(n²) solution, but greedy is optimal and faster."
      }
    ]
  },

  {
    problemName: "4Sum",
    author: "K-Sum Specialist",
    explanation: "Extend 3Sum approach: two outer loops, then two pointers. Handle duplicates carefully.",
    solution: `class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        
        for (int i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            for (int j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j-1]) continue;
                
                int left = j + 1, right = n - 1;
                while (left < right) {
                    long long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right];
                    if (sum == target) {
                        result.push_back({nums[i], nums[j], nums[left], nums[right]});
                        while (left < right && nums[left] == nums[left+1]) left++;
                        while (left < right && nums[right] == nums[right-1]) right--;
                        left++;
                        right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return result;
    }
};`,
    notes: "Time: O(n³), Space: O(1) excluding result",
    comments: [
      {
        author: "KSumMaster",
        content: "Generalizes 3Sum approach well! Careful duplicate handling is key.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of long long to prevent integer overflow for large numbers.",
      },
      {
        author: "OptimizationExpert",
        content: "Early pruning: break if nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target, etc.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash map for O(n³) average case, but worst case still O(n³)."
      }
    ]
  },

  {
    problemName: "Jump Game",
    author: "Greedy Jumper",
    explanation: "Track the farthest reachable position. If at any point current position exceeds farthest reachable, return false.",
    solution: `class Solution {
public:
    bool canJump(vector<int>& nums) {
        int farthest = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i > farthest) {
                return false;
            }
            farthest = max(farthest, i + nums[i]);
            if (farthest >= nums.size() - 1) {
                return true;
            }
        }
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgoExpert",
        content: "Elegant greedy solution! Track the maximum reachable index.",
      },
      {
        author: "CodeReviewer42",
        content: "Early termination when farthest reaches last index improves efficiency.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single element array and array with zeros correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with O(n²) time, but greedy gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Jump Game II",
    author: "Greedy Jump Optimizer",
    explanation: "Track current jump end and farthest reachable. When we reach jump end, increment jumps and update jump end to farthest.",
    solution: `class Solution {
public:
    int jump(vector<int>& nums) {
        int jumps = 0, currentEnd = 0, farthest = 0;
        
        for (int i = 0; i < nums.size() - 1; i++) {
            farthest = max(farthest, i + nums[i]);
            
            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
                
                if (currentEnd >= nums.size() - 1) {
                    break;
                }
            }
        }
        
        return jumps;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgorithmMaster",
        content: "Brilliant BFS-like approach! Each 'level' represents one jump.",
      },
      {
        author: "CodeReviewer42",
        content: "Smart to stop at nums.size()-1 since we don't need to jump from last position.",
      },
      {
        author: "OptimizationExpert",
        content: "Early break when currentEnd reaches last index improves performance.",
      },
      {
        author: "AlternativeThinker",
        content: "DP solution would be O(n²), but this greedy gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Find the Duplicate Number",
    author: "Cycle Detection Pro",
    explanation: "Treat array as linked list where nums[i] is next pointer. Use Floyd's cycle detection (tortoise and hare).",
    solution: `class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        // Phase 1: Find intersection point
        int slow = nums[0];
        int fast = nums[0];
        
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        
        // Phase 2: Find cycle entrance (duplicate)
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        
        return slow;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "CycleDetectionExpert",
        content: "Brilliant application of Floyd's cycle detection! Treats array as linked list.",
      },
      {
        author: "CodeReviewer42",
        content: "Two-phase approach: find meeting point, then find cycle entrance.",
      },
      {
        author: "MathWizard",
        content: "Works because numbers are 1 to n, so indices are valid and there must be a cycle.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use binary search on value space for O(n log n), but this is O(n)."
      }
    ]
  },

  {
    problemName: "Subarray Sum Equals K",
    author: "Prefix Sum Master",
    explanation: "Use hash map to store prefix sums and their frequencies. For each position, check if (prefixSum - k) exists in map.",
    solution: `class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> prefixSumCount;
        prefixSumCount[0] = 1; // Empty subarray has sum 0
        int count = 0, prefixSum = 0;
        
        for (int num : nums) {
            prefixSum += num;
            if (prefixSumCount.find(prefixSum - k) != prefixSumCount.end()) {
                count += prefixSumCount[prefixSum - k];
            }
            prefixSumCount[prefixSum]++;
        }
        
        return count;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PrefixSumExpert",
        content: "Classic prefix sum + hash map approach! Handles negative numbers perfectly.",
      },
      {
        author: "CodeReviewer42",
        content: "Important to initialize with prefixSumCount[0] = 1 for subarrays starting at index 0.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where k=0 and arrays with negative numbers correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "Brute force would be O(n²), but this optimal solution is O(n)."
      }
    ]
  },

  {
    problemName: "Next Permutation",
    author: "Permutation Algorithmist",
    explanation: "Find first decreasing element from right, swap with next larger element, then reverse the suffix to get next permutation.",
    solution: `class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size();
        int i = n - 2;
        
        // Find first decreasing element from right
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        
        if (i >= 0) {
            // Find element just larger than nums[i]
            int j = n - 1;
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }
            swap(nums[i], nums[j]);
        }
        
        // Reverse the suffix
        reverse(nums.begin() + i + 1, nums.end());
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "CombinatoricsExpert",
        content: "Implements Narayana's algorithm for next permutation! Classic approach.",
      },
      {
        author: "CodeReviewer42",
        content: "Three steps: find pivot, find successor, reverse suffix. Clean implementation.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles last permutation correctly by reversing entire array.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use STL next_permutation, but understanding the algorithm is key."
      }
    ]
  },

  {
    problemName: "Spiral Matrix",
    author: "Matrix Traversal Pro",
    explanation: "Use four boundaries (top, bottom, left, right) and traverse in four directions until boundaries cross.",
    solution: `class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        if (matrix.empty()) return result;
        
        int top = 0, bottom = matrix.size() - 1;
        int left = 0, right = matrix[0].size() - 1;
        
        while (top <= bottom && left <= right) {
            // Traverse right
            for (int i = left; i <= right; i++) {
                result.push_back(matrix[top][i]);
            }
            top++;
            
            // Traverse down
            for (int i = top; i <= bottom; i++) {
                result.push_back(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                // Traverse left
                for (int i = right; i >= left; i--) {
                    result.push_back(matrix[bottom][i]);
                }
                bottom--;
            }
            
            if (left <= right) {
                // Traverse up
                for (int i = bottom; i >= top; i--) {
                    result.push_back(matrix[i][left]);
                }
                left++;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(m*n), Space: O(1) excluding result",
    comments: [
      {
        author: "MatrixTraversalExpert",
        content: "Clean boundary approach! Four directions with shrinking boundaries.",
      },
      {
        author: "CodeReviewer42",
        content: "Good checks for top<=bottom and left<=right after first two traversals.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single row and single column matrices correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use direction vectors, but boundary method is more intuitive."
      }
    ]
  },

  {
    problemName: "Set Matrix Zeroes",
    author: "In-Place Modifier",
    explanation: "Use first row and first column as markers. First pass mark zeros, second pass set zeros based on markers.",
    solution: `class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        bool firstRowZero = false, firstColZero = false;
        
        // Check if first row has zero
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) {
                firstRowZero = true;
                break;
            }
        }
        
        // Check if first column has zero
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) {
                firstColZero = true;
                break;
            }
        }
        
        // Use first row/col as markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        // Set zeros based on markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // Set first row if needed
        if (firstRowZero) {
            for (int j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
        
        // Set first column if needed
        if (firstColZero) {
            for (int i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
};`,
    notes: "Time: O(m*n), Space: O(1)",
    comments: [
      {
        author: "InPlaceAlgorithmist",
        content: "Brilliant O(1) space solution using first row/col as markers!",
      },
      {
        author: "CodeReviewer42",
        content: "Good separation of first row/col handling from the main marking logic.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where first row/col themselves contain zeros correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use two additional arrays, but this in-place approach is optimal."
      }
    ]
  },

  {
    problemName: "Rotate Image",
    author: "Matrix Transformer",
    explanation: "Two-step approach: transpose matrix (swap rows and columns), then reverse each row.",
    solution: `class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();
        
        // Transpose matrix
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
        
        // Reverse each row
        for (int i = 0; i < n; i++) {
            reverse(matrix[i].begin(), matrix[i].end());
        }
    }
};`,
    notes: "Time: O(n²), Space: O(1)",
    comments: [
      {
        author: "MatrixOperationsExpert",
        content: "Elegant two-step approach! Transpose + reverse = 90° rotation.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean and efficient. The transpose is done in-place with j starting from i+1.",
      },
      {
        author: "MathGeek",
        content: "Mathematically, rotation is transpose followed by reflection.",
      },
      {
        author: "AlternativeThinker",
        content: "We could rotate layer by layer, but this approach is simpler to implement."
      }
    ]
  },

  {
    problemName: "Word Search",
    author: "Backtracking Searcher",
    explanation: "Use DFS backtracking. For each starting position, explore all four directions, marking visited cells.",
    solution: `class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size(), n = board[0].size();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (backtrack(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
    
private:
    bool backtrack(vector<vector<char>>& board, string& word, int i, int j, int index) {
        if (index == word.length()) {
            return true;
        }
        
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || 
            board[i][j] != word[index]) {
            return false;
        }
        
        // Mark as visited
        char temp = board[i][j];
        board[i][j] = '#';
        
        // Explore four directions
        bool found = backtrack(board, word, i + 1, j, index + 1) ||
                     backtrack(board, word, i - 1, j, index + 1) ||
                     backtrack(board, word, i, j + 1, index + 1) ||
                     backtrack(board, word, i, j - 1, index + 1);
        
        // Restore original character
        board[i][j] = temp;
        
        return found;
    }
};`,
    notes: "Time: O(m*n*4^L) where L is word length, Space: O(L) for recursion stack",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking with DFS! Good pruning when characters don't match.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean marking/unmarking of visited cells using temporary storage.",
      },
      {
        author: "OptimizationExpert",
        content: "We could add a visited matrix, but modifying board saves space.",
      },
      {
        author: "AlternativeThinker",
        content: "Trie could help for multiple words, but for single word this is efficient."
      }
    ]
  },

  // Hard Array Problems (10)
  {
    problemName: "Trapping Rain Water",
    author: "Two Pointer Water Collector",
    explanation: "Use two pointers from both ends. Track left max and right max. Water trapped at each position is min(leftMax, rightMax) - height.",
    solution: `class Solution {
public:
    int trap(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        
        return water;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Brilliant two-pointer approach! No extra arrays needed.",
      },
      {
        author: "CodeReviewer42",
        content: "Key insight: water trapped depends on min(leftMax, rightMax) at each position.",
      },
      {
        author: "OptimizationExpert",
        content: "More efficient than DP approach which uses O(n) space for left/right arrays.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use stack for O(n) time and space, but this is optimal."
      }
    ]
  },

  {
    problemName: "Median of Two Sorted Arrays",
    author: "Binary Search Master",
    explanation: "Use binary search on smaller array. Partition both arrays such that left half has same elements as right half, and all left elements <= right elements.",
    solution: `class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.size(), n = nums2.size();
        int left = 0, right = m;
        
        while (left <= right) {
            int partition1 = (left + right) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;
            
            int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1 - 1];
            int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];
            
            int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2 - 1];
            int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];
            
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                // Found correct partition
                if ((m + n) % 2 == 0) {
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
                } else {
                    return max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                right = partition1 - 1;
            } else {
                left = partition1 + 1;
            }
        }
        
        return 0.0;
    }
};`,
    notes: "Time: O(log(min(m,n))), Space: O(1)",
    comments: [
      {
        author: "BinarySearchGuru",
        content: "One of the hardest binary search problems! Partition approach is brilliant.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of edge cases with INT_MIN and INT_MAX for empty partitions.",
      },
      {
        author: "AlgorithmHistorian",
        content: "Classic problem that tests deep understanding of binary search and medians.",
      },
      {
        author: "AlternativeThinker",
        content: "We could merge arrays for O(m+n) time, but this logarithmic solution is optimal."
      }
    ]
  },

  {
    problemName: "First Missing Positive",
    author: "In-Place Marker",
    explanation: "Use array itself as hash table. Place each number in its correct position (if within range), then find first position where number doesn't match index.",
    solution: `class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n = nums.size();
        
        // Place each number in its correct position if possible
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                swap(nums[i], nums[nums[i] - 1]);
            }
        }
        
        // Find first missing positive
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }
        
        return n + 1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "InPlaceAlgorithmist",
        content: "Brilliant cyclic sort approach! O(1) space by using array as hash table.",
      },
      {
        author: "CodeReviewer42",
        content: "The while loop ensures each number eventually reaches its correct position.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicates and numbers out of range correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set for O(n) time and space, but this is optimal O(1) space."
      }
    ]
  },

  {
    problemName: "Sliding Window Maximum",
    author: "Deque Master",
    explanation: "Use deque to maintain indices of elements in current window in decreasing order. Remove from back while current element is larger, and remove from front if out of window.",
    solution: `class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> result;
        deque<int> dq;
        
        for (int i = 0; i < nums.size(); i++) {
            // Remove elements out of window from front
            if (!dq.empty() && dq.front() == i - k) {
                dq.pop_front();
            }
            
            // Remove smaller elements from back
            while (!dq.empty() && nums[dq.back()] < nums[i]) {
                dq.pop_back();
            }
            
            dq.push_back(i);
            
            // Add to result once window size is reached
            if (i >= k - 1) {
                result.push_back(nums[dq.front()]);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(k)",
    comments: [
      {
        author: "DequeExpert",
        content: "Perfect use of deque! Maintains decreasing order of values in window.",
      },
      {
        author: "CodeReviewer42",
        content: "Stores indices in deque instead of values for easy window boundary checking.",
      },
      {
        author: "OptimizationExpert",
        content: "Each element pushed and popped at most once, so O(n) time.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use heap for O(n log k), but deque gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Minimum Window Substring",
    author: "Sliding Window Pro",
    explanation: "Use two pointers and hash map. Expand right pointer until all characters are included, then contract left pointer to find minimum window.",
    solution: `class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> target, window;
        for (char c : t) target[c]++;
        
        int left = 0, right = 0;
        int required = target.size();
        int formed = 0;
        int minLen = INT_MAX;
        int start = 0;
        
        while (right < s.length()) {
            char c = s[right];
            window[c]++;
            
            if (target.count(c) && window[c] == target[c]) {
                formed++;
            }
            
            while (left <= right && formed == required) {
                // Update minimum window
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }
                
                // Contract window from left
                char leftChar = s[left];
                window[leftChar]--;
                if (target.count(leftChar) && window[leftChar] < target[leftChar]) {
                    formed--;
                }
                left++;
            }
            
            right++;
        }
        
        return minLen == INT_MAX ? "" : s.substr(start, minLen);
    }
};`,
    notes: "Time: O(m + n), Space: O(m + n)",
    comments: [
      {
        author: "SlidingWindowExpert",
        content: "Classic sliding window with character counting! Expand and contract strategy.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of 'formed' counter to track when all characters are satisfied.",
      },
      {
        author: "OptimizationExpert",
        content: "Each character processed at most twice (by left and right pointers), so O(n).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use array instead of hash map since characters are limited, but hash map is more general."
      }
    ]
  },

  {
    problemName: "Largest Rectangle in Histogram",
    author: "Stack Calculator",
    explanation: "Use stack to track indices of increasing heights. When smaller height found, calculate area with stack top as smallest height.",
    solution: `class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        int n = heights.size();
        
        for (int i = 0; i <= n; i++) {
            int currentHeight = (i == n) ? 0 : heights[i];
            
            while (!st.empty() && currentHeight < heights[st.top()]) {
                int height = heights[st.top()];
                st.pop();
                int width = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            
            st.push(i);
        }
        
        return maxArea;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Brilliant stack-based solution! Maintains increasing height indices.",
      },
      {
        author: "CodeReviewer42",
        content: "Adding sentinel height 0 at the end ensures all bars are processed.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "The width calculation using stack indices is the key insight.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use divide and conquer for O(n log n), but stack gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Maximal Rectangle",
    author: "Histogram Transformer",
    explanation: "For each row, build histogram of consecutive 1's from top, then apply largest rectangle in histogram to each row.",
    solution: `class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if (matrix.empty()) return 0;
        
        int m = matrix.size(), n = matrix[0].size();
        vector<int> heights(n, 0);
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            // Update heights for current row
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    heights[j]++;
                } else {
                    heights[j] = 0;
                }
            }
            // Calculate max area for current histogram
            maxArea = max(maxArea, largestRectangleArea(heights));
        }
        
        return maxArea;
    }
    
private:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        int n = heights.size();
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            while (!st.empty() && h < heights[st.top()]) {
                int height = heights[st.top()];
                st.pop();
                int width = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            st.push(i);
        }
        return maxArea;
    }
};`,
    notes: "Time: O(m*n), Space: O(n)",
    comments: [
      {
        author: "DPAndStackExpert",
        content: "Clever reduction to histogram problem! Build histogram row by row.",
      },
      {
        author: "CodeReviewer42",
        content: "Reuses the histogram solution efficiently for each row.",
      },
      {
        author: "OptimizationExpert",
        content: "O(n) space for heights array, and O(n) for stack in each row processing.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with left/right boundaries, but this approach is more intuitive."
      }
    ]
  },

  {
    problemName: "Count of Smaller Numbers After Self",
    author: "Merge Sort Counter",
    explanation: "Use merge sort with counting. During merge process, count how many elements from right array are smaller than current left element.",
    solution: `class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 0);
        vector<pair<int, int>> indexedNums; // (value, original index)
        
        for (int i = 0; i < n; i++) {
            indexedNums.push_back({nums[i], i});
        }
        
        mergeSort(indexedNums, 0, n - 1, result);
        return result;
    }
    
private:
    void mergeSort(vector<pair<int, int>>& nums, int left, int right, vector<int>& result) {
        if (left >= right) return;
        
        int mid = left + (right - left) / 2;
        mergeSort(nums, left, mid, result);
        mergeSort(nums, mid + 1, right, result);
        merge(nums, left, mid, right, result);
    }
    
    void merge(vector<pair<int, int>>& nums, int left, int mid, int right, vector<int>& result) {
        vector<pair<int, int>> temp(right - left + 1);
        int i = left, j = mid + 1, k = 0;
        int rightCount = 0;
        
        while (i <= mid && j <= right) {
            if (nums[i].first > nums[j].first) {
                rightCount++;
                temp[k++] = nums[j++];
            } else {
                result[nums[i].second] += rightCount;
                temp[k++] = nums[i++];
            }
        }
        
        while (i <= mid) {
            result[nums[i].second] += rightCount;
            temp[k++] = nums[i++];
        }
        
        while (j <= right) {
            temp[k++] = nums[j++];
        }
        
        for (int p = 0; p < temp.size(); p++) {
            nums[left + p] = temp[p];
        }
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "MergeSortExpert",
        content: "Brilliant use of merge sort for counting inversions! Classic divide and conquer.",
      },
      {
        author: "CodeReviewer42",
        content: "Stores original indices to update result array correctly during merge.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "The rightCount tracks how many elements from right are smaller than current left.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use BST or Fenwick tree, but merge sort is elegant and efficient."
      }
    ]
  },

  {
    problemName: "Candy",
    author: "Greedy Distributor",
    explanation: "Two passes: left to right ensuring right neighbor has more if rating is higher, then right to left ensuring left neighbor has more if rating is higher.",
    solution: `class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        vector<int> candies(n, 1);
        
        // Left to right pass
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        
        // Right to left pass
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = max(candies[i], candies[i + 1] + 1);
            }
        }
        
        return accumulate(candies.begin(), candies.end(), 0);
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "GreedyAlgorithmist",
        content: "Classic two-pass greedy! Ensures both left and right constraints are satisfied.",
      },
      {
        author: "CodeReviewer42",
        content: "The second pass uses max() to preserve candies from first pass.",
      },
      {
        author: "OptimizationExpert",
        content: "We could do this in O(1) space with careful tracking, but O(n) is acceptable.",
      },
      {
        author: "AlternativeThinker",
        content: "Single pass with peak detection is possible but more complex."
      }
    ]
  },

  {
    problemName: "N-Queens",
    author: "Backtracking Queen",
    explanation: "Use backtracking with three sets to track attacked columns and diagonals. Place queens row by row, checking conflicts.",
    solution: `class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> solutions;
        vector<string> board(n, string(n, '.'));
        unordered_set<int> cols, diag1, diag2;
        backtrack(0, n, board, solutions, cols, diag1, diag2);
        return solutions;
    }
    
private:
    void backtrack(int row, int n, vector<string>& board, vector<vector<string>>& solutions,
                  unordered_set<int>& cols, unordered_set<int>& diag1, unordered_set<int>& diag2) {
        if (row == n) {
            solutions.push_back(board);
            return;
        }
        
        for (int col = 0; col < n; col++) {
            if (cols.count(col) || diag1.count(row - col) || diag2.count(row + col)) {
                continue;
            }
            
            // Place queen
            board[row][col] = 'Q';
            cols.insert(col);
            diag1.insert(row - col);
            diag2.insert(row + col);
            
            // Recurse
            backtrack(row + 1, n, board, solutions, cols, diag1, diag2);
            
            // Remove queen
            board[row][col] = '.';
            cols.erase(col);
            diag1.erase(row - col);
            diag2.erase(row + col);
        }
    }
};`,
    notes: "Time: O(n!), Space: O(n)",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking with pruning! Uses three sets for efficient conflict checking.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean marking/unmarking of attacked positions using sets.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use bit masks for better performance, but sets are more readable.",
      },
      {
        author: "AlternativeThinker",
        content: "Iterative solutions exist but recursive backtracking is more natural for this problem."
      }
    ]
  },
   // ===== HASH TABLE SOLUTIONS =====
  
  // Easy (8)
  {
    problemName: "Intersection of Two Arrays",
    author: "Set Operator",
    explanation: "Convert both arrays to sets, then find the intersection using set operations.",
    solution: `class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1(nums1.begin(), nums1.end());
        unordered_set<int> resultSet;
        
        for (int num : nums2) {
            if (set1.count(num)) {
                resultSet.insert(num);
            }
        }
        
        return vector<int>(resultSet.begin(), resultSet.end());
    }
};`,
    notes: "Time: O(n + m), Space: O(n + m)",
    comments: [
      {
        author: "SetMaster",
        content: "Clean set-based solution! Automatically handles duplicates.",
      },
      {
        author: "CodeReviewer42",
        content: "Using unordered_set for O(1) lookups. Efficient and readable.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also sort both arrays and use two pointers for O(1) space.",
      },
      {
        author: "OptimizationExpert",
        content: "If one array is much larger, it's better to put the smaller one in the set."
      }
    ]
  },

  {
    problemName: "Happy Number",
    author: "Cycle Detector",
    explanation: "Use a set to detect cycles. Keep calculating sum of squares of digits until we reach 1 or detect a cycle.",
    solution: `class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> seen;
        
        while (n != 1 && !seen.count(n)) {
            seen.insert(n);
            n = getNext(n);
        }
        
        return n == 1;
    }
    
private:
    int getNext(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
};`,
    notes: "Time: O(log n), Space: O(log n)",
    comments: [
      {
        author: "CycleDetectionExpert",
        content: "Perfect cycle detection using hash set! All non-happy numbers eventually cycle.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of digit sum calculation into helper function.",
      },
      {
        author: "MathGeek",
        content: "Mathematically proven that all numbers either reach 1 or enter cycle 4→16→37→58→89→145→42→20→4",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Floyd's cycle detection for O(1) space, but set is more readable."
      }
    ]
  },

  {
    problemName: "Isomorphic Strings",
    author: "Mapping Validator",
    explanation: "Use two hash maps to track character mappings in both directions. Ensure one-to-one mapping between characters.",
    solution: `class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;
        
        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;
        
        for (int i = 0; i < s.length(); i++) {
            char charS = s[i];
            char charT = t[i];
            
            // Check mapping from s to t
            if (sToT.count(charS)) {
                if (sToT[charS] != charT) {
                    return false;
                }
            } else {
                sToT[charS] = charT;
            }
            
            // Check mapping from t to s
            if (tToS.count(charT)) {
                if (tToS[charT] != charS) {
                    return false;
                }
            } else {
                tToS[charT] = charS;
            }
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1) since limited to 256 ASCII characters",
    comments: [
      {
        author: "MappingExpert",
        content: "Good use of bidirectional mapping! Prevents many-to-one mappings.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean validation of both directions ensures true isomorphism.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases like 'ab' vs 'aa' and 'aa' vs 'ab' correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use array of size 256 instead of hash maps for slightly better performance."
      }
    ]
  },

  {
    problemName: "Word Pattern",
    author: "Pattern Matcher",
    explanation: "Similar to isomorphic strings. Use two hash maps to track pattern-character to word mapping and word to pattern-character mapping.",
    solution: `class Solution {
public:
    bool wordPattern(string pattern, string s) {
        unordered_map<char, string> charToWord;
        unordered_map<string, char> wordToChar;
        
        vector<string> words;
        stringstream ss(s);
        string word;
        
        // Split string into words
        while (ss >> word) {
            words.push_back(word);
        }
        
        if (pattern.length() != words.size()) {
            return false;
        }
        
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern[i];
            string w = words[i];
            
            // Check char to word mapping
            if (charToWord.count(c)) {
                if (charToWord[c] != w) {
                    return false;
                }
            } else {
                charToWord[c] = w;
            }
            
            // Check word to char mapping
            if (wordToChar.count(w)) {
                if (wordToChar[w] != c) {
                    return false;
                }
            } else {
                wordToChar[w] = c;
            }
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PatternMatchingExpert",
        content: "Extends isomorphic strings concept to word patterns!",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of stringstream for word splitting. Handles multiple spaces correctly.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Important length check at the beginning prevents mismatched patterns.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use istringstream for more modern C++ string splitting."
      }
    ]
  },

  // Medium (12)
  {
    problemName: "Longest Consecutive Sequence",
    author: "Sequence Finder",
    explanation: "Use hash set for O(1) lookups. For each number, check if it's the start of a sequence (no num-1 exists), then expand sequence.",
    solution: `class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longest = 0;
        
        for (int num : numSet) {
            // Check if this is the start of a sequence
            if (!numSet.count(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;
                
                // Expand the sequence
                while (numSet.count(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }
                
                longest = max(longest, currentStreak);
            }
        }
        
        return longest;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "SequenceExpert",
        content: "Brilliant O(n) solution! Only starts sequences from actual starting points.",
      },
      {
        author: "CodeReviewer42",
        content: "The key insight: only check sequences starting from numbers without num-1.",
      },
      {
        author: "OptimizationExpert",
        content: "Each number is part of exactly one sequence, so O(n) time overall.",
      },
      {
        author: "AlternativeThinker",
        content: "Sorting would give O(n log n), but this hash set approach is optimal."
      }
    ]
  },

  {
    problemName: "Insert Delete GetRandom O(1)",
    author: "Data Structure Designer",
    explanation: "Combine hash map (for O(1) lookups) with vector (for O(1) random access). When deleting, swap with last element.",
    solution: `class RandomizedSet {
private:
    unordered_map<int, int> valToIndex; // value to index in vector
    vector<int> values;
    
public:
    RandomizedSet() {}
    
    bool insert(int val) {
        if (valToIndex.count(val)) {
            return false;
        }
        valToIndex[val] = values.size();
        values.push_back(val);
        return true;
    }
    
    bool remove(int val) {
        if (!valToIndex.count(val)) {
            return false;
        }
        
        // Swap with last element
        int lastElement = values.back();
        int indexToRemove = valToIndex[val];
        
        values[indexToRemove] = lastElement;
        valToIndex[lastElement] = indexToRemove;
        
        // Remove last element
        values.pop_back();
        valToIndex.erase(val);
        
        return true;
    }
    
    int getRandom() {
        int randomIndex = rand() % values.size();
        return values[randomIndex];
    }
};`,
    notes: "Time: O(1) for all operations, Space: O(n)",
    comments: [
      {
        author: "DSDesigner",
        content: "Clever combination of hash map and vector! Enables all O(1) operations.",
      },
      {
        author: "CodeReviewer42",
        content: "The swap-and-pop technique for deletion maintains O(1) time.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles removal of last element correctly with the swap.",
      },
      {
        author: "AlternativeThinker",
        content: "We need to update the index of the swapped element in the hash map."
      }
    ]
  },

  {
    problemName: "Design Underground System",
    author: "System Designer",
    explanation: "Use two hash maps: one for active check-ins, another for aggregating travel times between stations.",
    solution: `class UndergroundSystem {
private:
    unordered_map<int, pair<string, int>> checkIns; // id -> {stationName, time}
    unordered_map<string, pair<int, int>> travelTimes; // "start->end" -> {totalTime, count}
    
public:
    UndergroundSystem() {}
    
    void checkIn(int id, string stationName, int t) {
        checkIns[id] = {stationName, t};
    }
    
    void checkOut(int id, string stationName, int t) {
        auto& checkIn = checkIns[id];
        string startStation = checkIn.first;
        int startTime = checkIn.second;
        
        string route = startStation + "->" + stationName;
        int travelTime = t - startTime;
        
        travelTimes[route].first += travelTime;
        travelTimes[route].second++;
        
        checkIns.erase(id);
    }
    
    double getAverageTime(string startStation, string endStation) {
        string route = startStation + "->" + endStation;
        auto& data = travelTimes[route];
        return (double)data.first / data.second;
    }
};`,
    notes: "Time: O(1) for all operations, Space: O(n + m) where n is active trips, m is routes",
    comments: [
      {
        author: "SystemDesignExpert",
        content: "Clean separation of check-in data and travel time aggregation!",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of pair to store total time and count for easy average calculation.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Properly removes check-in record after checkout to prevent memory leaks.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use nested hash maps for station pairs, but string concatenation is simpler."
      }
    ]
  },

  {
    problemName: "Find Duplicate File in System",
    author: "File System Parser",
    explanation: "Parse each file path to extract content and use hash map to group files by content.",
    solution: `class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> contentToFiles;
        
        for (string& path : paths) {
            stringstream ss(path);
            string directory;
            ss >> directory;
            
            string fileInfo;
            while (ss >> fileInfo) {
                // Parse filename(content)
                int openParen = fileInfo.find('(');
                string filename = fileInfo.substr(0, openParen);
                string content = fileInfo.substr(openParen + 1, fileInfo.length() - openParen - 2);
                
                string fullPath = directory + "/" + filename;
                contentToFiles[content].push_back(fullPath);
            }
        }
        
        // Collect groups with duplicates
        vector<vector<string>> result;
        for (auto& [content, files] : contentToFiles) {
            if (files.size() > 1) {
                result.push_back(files);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n * m) where n is paths, m is files per path, Space: O(n)",
    comments: [
      {
        author: "StringParser",
        content: "Good string parsing with stringstream and find! Handles the format well.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean extraction of filename and content using substring operations.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Properly handles the parentheses and builds correct file paths.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use regex for more robust parsing, but this is efficient and clear."
      }
    ]
  },

  {
    problemName: "Brick Wall",
    author: "Edge Counter",
    explanation: "Use hash map to count edges at each position. The solution is total rows minus maximum edges at any position.",
    solution: `class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        unordered_map<int, int> edgeCount;
        int maxEdges = 0;
        
        for (auto& row : wall) {
            int position = 0;
            // Don't include the last edge (end of wall)
            for (int i = 0; i < row.size() - 1; i++) {
                position += row[i];
                edgeCount[position]++;
                maxEdges = max(maxEdges, edgeCount[position]);
            }
        }
        
        return wall.size() - maxEdges;
    }
};`,
    notes: "Time: O(n * m), Space: O(n)",
    comments: [
      {
        author: "EdgeCountingExpert",
        content: "Clever insight! The weak point is where most edges align.",
      },
      {
        author: "CodeReviewer42",
        content: "Important to skip the last edge since all rows end at the same position.",
      },
      {
        author: "OptimizationExpert",
        content: "We only need to track the maximum, not all edge counts.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use prefix sums for each row, but this cumulative approach is simpler."
      }
    ]
  },

  {
    problemName: "Contiguous Array",
    author: "Prefix Sum Balancer",
    explanation: "Treat 0 as -1 and 1 as +1. Use hash map to track first occurrence of each prefix sum. Maximum subarray is between equal prefix sums.",
    solution: `class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> prefixSumIndex;
        prefixSumIndex[0] = -1; // Empty subarray has sum 0
        
        int maxLength = 0;
        int prefixSum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            // Treat 0 as -1, 1 as +1
            prefixSum += (nums[i] == 0) ? -1 : 1;
            
            if (prefixSumIndex.count(prefixSum)) {
                maxLength = max(maxLength, i - prefixSumIndex[prefixSum]);
            } else {
                prefixSumIndex[prefixSum] = i;
            }
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PrefixSumMaster",
        content: "Brilliant transformation! Equal numbers of 0s and 1s means sum = 0.",
      },
      {
        author: "CodeReviewer42",
        content: "The initial prefixSumIndex[0] = -1 handles subarrays starting from index 0.",
      },
      {
        author: "OptimizationExpert",
        content: "Only stores first occurrence of each prefix sum for maximum length.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use array instead of hash map since sum range is limited to [-n, n]."
      }
    ]
  },

  {
    problemName: "Find All Duplicates in an Array",
    author: "In-Place Marker",
    explanation: "Use the array itself as a marker. For each number, mark the position (num-1) as negative. If already negative, it's a duplicate.",
    solution: `class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> result;
        
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1;
            
            if (nums[index] < 0) {
                result.push_back(index + 1);
            } else {
                nums[index] = -nums[index];
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "InPlaceAlgorithmist",
        content: "Clever negative marking technique! O(1) space by using array as marker.",
      },
      {
        author: "CodeReviewer42",
        content: "Uses abs() to handle already negative numbers during processing.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Works because numbers are between 1 and n, and array size is n.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set for O(n) space, but this in-place approach is optimal."
      }
    ]
  },

  {
    problemName: "Encode and Decode TinyURL",
    author: "URL Shortener",
    explanation: "Use hash map to store mapping from short URL to long URL. Generate random short codes.",
    solution: `class Solution {
private:
    unordered_map<string, string> urlMap;
    string characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    string baseUrl = "http://tinyurl.com/";
    
public:
    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        string shortCode;
        do {
            shortCode = generateRandomCode();
        } while (urlMap.count(baseUrl + shortCode));
        
        string shortUrl = baseUrl + shortCode;
        urlMap[shortUrl] = longUrl;
        return shortUrl;
    }
    
    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        return urlMap[shortUrl];
    }
    
private:
    string generateRandomCode() {
        string code;
        for (int i = 0; i < 6; i++) {
            code += characters[rand() % characters.length()];
        }
        return code;
    }
};`,
    notes: "Time: O(1) for both operations, Space: O(n)",
    comments: [
      {
        author: "URLShorteningExpert",
        content: "Practical implementation! Handles potential collisions with do-while loop.",
      },
      {
        author: "CodeReviewer42",
        content: "Good character set for URL-friendly short codes.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Checks for existing codes to prevent overwriting.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use counter-based encoding for guaranteed uniqueness, but random is more secure."
      }
    ]
  },

  // Hard (5)
  {
    problemName: "Sudoku Solver",
    author: "Backtracking Solver",
    explanation: "Use backtracking with three sets to track used numbers in rows, columns, and boxes. Try all possibilities for empty cells.",
    solution: `class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }
    
private:
    bool solve(vector<vector<char>>& board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;
                            if (solve(board)) {
                                return true;
                            }
                            board[i][j] = '.'; // backtrack
                        }
                    }
                    return false; // no valid number found
                }
            }
        }
        return true; // all cells filled
    }
    
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c) return false;
        }
        return true;
    }
};`,
    notes: "Time: O(9^(n*n)) but heavily pruned, Space: O(1)",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking! Tries all possibilities with pruning.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean isValid function checks row, column and box efficiently.",
      },
      {
        author: "OptimizationExpert",
        content: "We could precompute possible numbers for each cell to reduce branching.",
      },
      {
        author: "AlternativeThinker",
        content: "Dancing Links algorithm is more efficient but much more complex."
      }
    ]
  },

  {
    problemName: "Word Squares",
    author: "Prefix Builder",
    explanation: "Use backtracking with trie or hash map for prefix lookup. Build square row by row, ensuring each prefix matches corresponding column.",
    solution: `class Solution {
public:
    vector<vector<string>> wordSquares(vector<string>& words) {
        unordered_map<string, vector<string>> prefixMap;
        int n = words[0].size();
        
        // Build prefix map
        for (string& word : words) {
            for (int i = 0; i <= n; i++) {
                string prefix = word.substr(0, i);
                prefixMap[prefix].push_back(word);
            }
        }
        
        vector<vector<string>> result;
        vector<string> square;
        backtrack(0, n, square, prefixMap, result);
        return result;
    }
    
private:
    void backtrack(int row, int n, vector<string>& square, 
                   unordered_map<string, vector<string>>& prefixMap,
                   vector<vector<string>>& result) {
        if (row == n) {
            result.push_back(square);
            return;
        }
        
        // Build prefix for current row
        string prefix;
        for (int i = 0; i < row; i++) {
            prefix += square[i][row];
        }
        
        // Get words with matching prefix
        for (string& word : prefixMap[prefix]) {
            square.push_back(word);
            backtrack(row + 1, n, square, prefixMap, result);
            square.pop_back();
        }
    }
};`,
    notes: "Time: O(n * 26^n) in worst case, Space: O(n * L) where L is total characters",
    comments: [
      {
        author: "WordSquareExpert",
        content: "Clever prefix-based backtracking! Ensures column prefixes match row prefixes.",
      },
      {
        author: "CodeReviewer42",
        content: "Good prefix map that stores all prefixes from length 0 to n.",
      },
      {
        author: "OptimizationExpert",
        content: "Using trie instead of hash map could be more memory efficient for large inputs.",
      },
      {
        author: "AlternativeThinker",
        content: "We could prune early when no words match the required prefix."
      }
    ]
  },
  // ===== STRING SOLUTIONS =====
  
  // Easy (10)
  {
    problemName: "Valid Palindrome",
    author: "Two Pointer Validator",
    explanation: "Use two pointers from both ends, skipping non-alphanumeric characters. Compare characters case-insensitively.",
    solution: `class Solution {
public:
    bool isPalindrome(string s) {
        int left = 0, right = s.length() - 1;
        
        while (left < right) {
            // Skip non-alphanumeric characters from left
            while (left < right && !isalnum(s[left])) {
                left++;
            }
            // Skip non-alphanumeric characters from right
            while (left < right && !isalnum(s[right])) {
                right--;
            }
            
            // Compare characters case-insensitively
            if (tolower(s[left]) != tolower(s[right])) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Clean two-pointer approach! Handles all edge cases elegantly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of isalnum() and tolower() for proper character handling.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty string, single character, and strings with only non-alphanumeric characters.",
      },
      {
        author: "AlternativeThinker",
        content: "We could filter first then check, but this avoids extra space usage."
      }
    ]
  },

  {
    problemName: "Valid Anagram",
    author: "Frequency Counter",
    explanation: "Use frequency array to count characters in both strings. Compare if frequencies match.",
    solution: `class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;
        
        vector<int> freq(26, 0);
        
        // Count characters in s
        for (char c : s) {
            freq[c - 'a']++;
        }
        
        // Decrement counts for characters in t
        for (char c : t) {
            freq[c - 'a']--;
            if (freq[c - 'a'] < 0) {
                return false;
            }
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "FrequencyMaster",
        content: "Efficient array-based solution! O(1) space for English letters.",
      },
      {
        author: "CodeReviewer42",
        content: "Early return when frequency becomes negative improves efficiency.",
      },
      {
        author: "OptimizationExpert",
        content: "For Unicode, we'd need hash map, but array is faster for English.",
      },
      {
        author: "AlternativeThinker",
        content: "We could sort both strings and compare for O(n log n) time, O(1) space."
      }
    ]
  },

  {
    problemName: "First Unique Character in a String",
    author: "Frequency Analyzer",
    explanation: "First pass: count frequency of each character. Second pass: find first character with frequency 1.",
    solution: `class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> freq(26, 0);
        
        // Count frequencies
        for (char c : s) {
            freq[c - 'a']++;
        }
        
        // Find first unique character
        for (int i = 0; i < s.length(); i++) {
            if (freq[s[i] - 'a'] == 1) {
                return i;
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPassExpert",
        content: "Efficient two-pass approach! O(n) time with O(1) space.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of frequency counting and unique character finding.",
      },
      {
        author: "OptimizationExpert",
        content: "Array is more efficient than hash map for limited character set.",
      },
      {
        author: "AlternativeThinker",
        content: "We could store both frequency and first index in one pass with linked hash map."
      }
    ]
  },

  {
    problemName: "Reverse String",
    author: "Two Pointer Reverser",
    explanation: "Use two pointers from both ends, swap characters until they meet in the middle.",
    solution: `class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;
        
        while (left < right) {
            swap(s[left], s[right]);
            left++;
            right--;
        }
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerMaster",
        content: "Classic two-pointer string reversal! In-place and efficient.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean and straightforward. No extra space needed.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty array and single character correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use STL reverse, but understanding the algorithm is important."
      }
    ]
  },

  {
    problemName: "Reverse Integer",
    author: "Digit Reverser",
    explanation: "Process digits from right to left, building reversed number. Check for integer overflow at each step.",
    solution: `class Solution {
public:
    int reverse(int x) {
        int reversed = 0;
        
        while (x != 0) {
            int digit = x % 10;
            x /= 10;
            
            // Check for overflow before multiplying
            if (reversed > INT_MAX / 10 || (reversed == INT_MAX / 10 && digit > 7)) {
                return 0;
            }
            if (reversed < INT_MIN / 10 || (reversed == INT_MIN / 10 && digit < -8)) {
                return 0;
            }
            
            reversed = reversed * 10 + digit;
        }
        
        return reversed;
    }
};`,
    notes: "Time: O(log x), Space: O(1)",
    comments: [
      {
        author: "OverflowExpert",
        content: "Good overflow checking! Prevents undefined behavior.",
      },
      {
        author: "CodeReviewer42",
        content: "Checks overflow before the actual multiplication and addition.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles negative numbers correctly through modulo and division.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use long long for intermediate storage, but this is more space efficient."
      }
    ]
  },

  {
    problemName: "Implement strStr()",
    author: "String Matcher",
    explanation: "Use sliding window to check each possible starting position. For each position, check if substring matches needle.",
    solution: `class Solution {
public:
    int strStr(string haystack, string needle) {
        int n = haystack.length();
        int m = needle.length();
        
        if (m == 0) return 0;
        if (n < m) return -1;
        
        for (int i = 0; i <= n - m; i++) {
            int j = 0;
            while (j < m && haystack[i + j] == needle[j]) {
                j++;
            }
            if (j == m) {
                return i;
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(n * m), Space: O(1)",
    comments: [
      {
        author: "StringMatchingExpert",
        content: "Straightforward sliding window approach! Good for small patterns.",
      },
      {
        author: "CodeReviewer42",
        content: "Proper handling of edge cases: empty needle and shorter haystack.",
      },
      {
        author: "OptimizationExpert",
        content: "For large inputs, KMP algorithm would be more efficient with O(n + m) time.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Rabin-Karp with rolling hash for average O(n + m) time."
      }
    ]
  },

  {
    problemName: "Longest Common Prefix",
    author: "Vertical Scanner",
    explanation: "Compare characters vertically (same position across all strings). Stop when characters don't match.",
    solution: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0][i];
            for (int j = 1; j < strs.size(); j++) {
                if (i >= strs[j].length() || strs[j][i] != c) {
                    return strs[0].substr(0, i);
                }
            }
        }
        
        return strs[0];
    }
};`,
    notes: "Time: O(S) where S is total characters, Space: O(1)",
    comments: [
      {
        author: "VerticalScanner",
        content: "Efficient vertical scanning! Stops early when mismatch found.",
      },
      {
        author: "CodeReviewer42",
        content: "Good bounds checking with i >= strs[j].length().",
      },
      {
        author: "OptimizationExpert",
        content: "Worst case is when all strings are identical, O(n * m) time.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use divide and conquer or binary search, but this is simpler."
      }
    ]
  },

  {
    problemName: "Valid Parentheses",
    author: "Stack Validator",
    explanation: "Use stack to track opening brackets. When closing bracket found, check if it matches top of stack.",
    solution: `class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        unordered_map<char, char> matching = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        
        for (char c : s) {
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            } else {
                if (st.empty() || st.top() != matching[c]) {
                    return false;
                }
                st.pop();
            }
        }
        
        return st.empty();
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Classic stack application! Perfect for nested bracket matching.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of hash map for clean bracket matching logic.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Final check st.empty() ensures all brackets are closed.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use counter method for single bracket type, but stack handles all types."
      }
    ]
  },

  {
    problemName: "Roman to Integer",
    author: "Roman Numerals Converter",
    explanation: "Process from left to right. If current value is less than next value, subtract current value, otherwise add it.",
    solution: `class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> values = {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        int result = 0;
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            int current = values[s[i]];
            int next = (i < n - 1) ? values[s[i + 1]] : 0;
            
            if (current < next) {
                result -= current;
            } else {
                result += current;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "RomanExpert",
        content: "Clever left-to-right processing! Handles subtractive notation correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of hash map for clean value lookup.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Proper bounds checking for next value lookup.",
      },
      {
        author: "AlternativeThinker",
        content: "We could process right-to-left and always add, checking if we need to subtract previous."
      }
    ]
  },

  {
    problemName: "Count and Say",
    author: "Sequence Generator",
    explanation: "Iteratively generate each term from previous term. Count consecutive same digits and append count-digit pairs.",
    solution: `class Solution {
public:
    string countAndSay(int n) {
        if (n == 1) return "1";
        
        string prev = "1";
        for (int i = 2; i <= n; i++) {
            string current = "";
            int count = 1;
            char digit = prev[0];
            
            for (int j = 1; j < prev.length(); j++) {
                if (prev[j] == digit) {
                    count++;
                } else {
                    current += to_string(count) + digit;
                    count = 1;
                    digit = prev[j];
                }
            }
            current += to_string(count) + digit;
            prev = current;
        }
        
        return prev;
    }
};`,
    notes: "Time: O(2^n) in worst case, Space: O(2^(n-1))",
    comments: [
      {
        author: "SequenceGenerator",
        content: "Iterative generation! Each term builds on previous term.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean counting of consecutive digits with string building.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles n=1 as base case correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion, but iterative is more space efficient."
      }
    ]
  },

  // Medium (15)
  {
    problemName: "Longest Substring Without Repeating Characters",
    author: "Sliding Window Expert",
    explanation: "Use sliding window with hash set. Expand right pointer, when duplicate found, shrink left pointer until duplicate removed.",
    solution: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> window;
        int left = 0, maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            // Shrink window until no duplicate
            while (window.count(s[right])) {
                window.erase(s[left]);
                left++;
            }
            
            window.insert(s[right]);
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(min(n, m)) where m is character set size",
    comments: [
      {
        author: "SlidingWindowMaster",
        content: "Classic sliding window! Maintains window with unique characters.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean shrinking of left boundary when duplicate encountered.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use hash map to store indices for O(1) left jumps.",
      },
      {
        author: "AlternativeThinker",
        content: "Array of size 128 could be used instead of hash set for ASCII."
      }
    ]
  },

  {
    problemName: "Longest Palindromic Substring",
    author: "Center Expansion Expert",
    explanation: "Expand around each possible center (character or between characters). Track longest palindrome found.",
    solution: `class Solution {
public:
    string longestPalindrome(string s) {
        if (s.empty()) return "";
        
        int start = 0, maxLength = 1;
        
        for (int i = 0; i < s.length(); i++) {
            // Expand around single character center
            int len1 = expandAroundCenter(s, i, i);
            // Expand around center between characters
            int len2 = expandAroundCenter(s, i, i + 1);
            
            int len = max(len1, len2);
            if (len > maxLength) {
                maxLength = len;
                start = i - (len - 1) / 2;
            }
        }
        
        return s.substr(start, maxLength);
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};`,
    notes: "Time: O(n²), Space: O(1)",
    comments: [
      {
        author: "PalindromeExpert",
        content: "Center expansion approach! Handles both odd and even length palindromes.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of expansion logic into helper function.",
      },
      {
        author: "OptimizationExpert",
        content: "Manacher's algorithm provides O(n) time but is more complex.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with O(n²) time and space, but this uses O(1) space."
      }
    ]
  },

  {
    problemName: "Palindromic Substrings",
    author: "Center Counter",
    explanation: "Similar to longest palindromic substring, but count all palindromic substrings by expanding around all centers.",
    solution: `class Solution {
public:
    int countSubstrings(string s) {
        int count = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Count palindromes with single character center
            count += expandAroundCenter(s, i, i);
            // Count palindromes with center between characters
            count += expandAroundCenter(s, i, i + 1);
        }
        
        return count;
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }
};`,
    notes: "Time: O(n²), Space: O(1)",
    comments: [
      {
        author: "PalindromeCounter",
        content: "Center expansion adapted for counting! Efficient O(n²) solution.",
      },
      {
        author: "CodeReviewer42",
        content: "Same expansion logic as longest palindrome, but returns count instead of length.",
      },
      {
        author: "OptimizationExpert",
        content: "Manacher's algorithm could give O(n) time but is much more complex.",
      },
      {
        author: "AlternativeThinker",
        content: "DP approach would use O(n²) space, this uses O(1) space."
      }
    ]
  },

  {
    problemName: "String to Integer (atoi)",
    author: "String Parser",
    explanation: "Process string character by character: skip whitespace, check sign, read digits, handle overflow.",
    solution: `class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.length();
        int sign = 1;
        long result = 0;
        
        // Skip leading whitespace
        while (i < n && s[i] == ' ') {
            i++;
        }
        
        // Check sign
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }
        
        // Process digits
        while (i < n && isdigit(s[i])) {
            int digit = s[i] - '0';
            
            // Check for overflow
            if (result > (INT_MAX - digit) / 10) {
                return (sign == 1) ? INT_MAX : INT_MIN;
            }
            
            result = result * 10 + digit;
            i++;
        }
        
        return sign * result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "StringParserExpert",
        content: "Comprehensive parsing! Handles all edge cases: whitespace, signs, overflow.",
      },
      {
        author: "CodeReviewer42",
        content: "Good overflow checking using integer arithmetic instead of long comparison.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases like empty string, only whitespace, and non-digit characters.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use finite state machine for more complex parsing requirements."
      }
    ]
  },

  {
    problemName: "Longest Repeating Character Replacement",
    author: "Sliding Window Optimizer",
    explanation: "Use sliding window with character counts. Track max frequency in current window. Window is valid if (window size - max frequency) <= k.",
    solution: `class Solution {
public:
    int characterReplacement(string s, int k) {
        vector<int> count(26, 0);
        int left = 0, maxCount = 0, maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            count[s[right] - 'A']++;
            maxCount = max(maxCount, count[s[right] - 'A']);
            
            // Current window size is (right - left + 1)
            // If we need to replace more than k characters, shrink window
            while (right - left + 1 - maxCount > k) {
                count[s[left] - 'A']--;
                left++;
                // Note: we don't need to update maxCount here due to the maxLength property
            }
            
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SlidingWindowExpert",
        content: "Clever sliding window! The key insight is tracking max frequency in window.",
      },
      {
        author: "CodeReviewer42",
        content: "The while loop condition (window size - maxCount > k) determines validity.",
      },
      {
        author: "OptimizationExpert",
        content: "We don't need to update maxCount when shrinking because we only care about larger windows.",
      },
      {
        author: "AlternativeThinker",
        content: "We could track all character frequencies, but tracking max is sufficient."
      }
    ]
  },

  {
    problemName: "Group Anagrams",
    author: "Anagram Grouper",
    explanation: "Use sorted string as key in hash map. All anagrams will have the same sorted string.",
    solution: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> groups;
        
        for (string& str : strs) {
            string key = str;
            sort(key.begin(), key.end());
            groups[key].push_back(str);
        }
        
        vector<vector<string>> result;
        for (auto& [key, group] : groups) {
            result.push_back(group);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n * k log k) where k is max string length, Space: O(n * k)",
    comments: [
      {
        author: "AnagramMaster",
        content: "Classic sorting-based grouping! Simple and effective.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean use of sorted string as hash map key.",
      },
      {
        author: "OptimizationExpert",
        content: "For better performance with long strings, we could use frequency count as key.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use character frequency string like '#2#1#3...' as key to avoid sorting."
      }
    ]
  },

  {
    problemName: "Generate Parentheses",
    author: "Backtracking Generator",
    explanation: "Use backtracking with open and close counts. Add '(' if open < n, add ')' if close < open.",
    solution: `class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        backtrack("", 0, 0, n, result);
        return result;
    }
    
private:
    void backtrack(string current, int open, int close, int n, vector<string>& result) {
        if (current.length() == 2 * n) {
            result.push_back(current);
            return;
        }
        
        if (open < n) {
            backtrack(current + '(', open + 1, close, n, result);
        }
        
        if (close < open) {
            backtrack(current + ')', open, close + 1, n, result);
        }
    }
};`,
    notes: "Time: O(4^n/√n) - Catalan number, Space: O(n) for recursion stack",
    comments: [
      {
        author: "BacktrackingExpert",
        content: "Classic backtracking! Ensures valid parentheses by tracking open/close counts.",
      },
      {
        author: "CodeReviewer42",
        content: "The condition 'close < open' ensures we never have invalid closing parentheses.",
      },
      {
        author: "CombinatoricsExpert",
        content: "Number of results is the nth Catalan number C(2n,n)/(n+1).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative DP, but backtracking is more intuitive."
      }
    ]
  },

  {
    problemName: "Simplify Path",
    author: "Path Simplifier",
    explanation: "Use stack to process path components. Split by '/', handle '.', '..', and push valid directory names.",
    solution: `class Solution {
public:
    string simplifyPath(string path) {
        vector<string> stack;
        stringstream ss(path);
        string token;
        
        // Split by '/'
        while (getline(ss, token, '/')) {
            if (token == "" || token == ".") {
                continue;
            } else if (token == "..") {
                if (!stack.empty()) {
                    stack.pop_back();
                }
            } else {
                stack.push_back(token);
            }
        }
        
        // Build simplified path
        string result = "";
        for (string& dir : stack) {
            result += "/" + dir;
        }
        
        return result.empty() ? "/" : result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PathProcessingExpert",
        content: "Clean stack-based processing! Handles all special cases correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of stringstream with getline for path splitting.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple slashes, '.', '..', and trailing slashes correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could process character by character, but stringstream is cleaner."
      }
    ]
  },

  {
    problemName: "Letter Combinations of a Phone Number",
    author: "Backtracking Generator",
    explanation: "Use backtracking to generate all combinations. For each digit, try all corresponding letters.",
    solution: `class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        
        vector<string> result;
        vector<string> mapping = {
            "", "", "abc", "def", "ghi", "jkl", 
            "mno", "pqrs", "tuv", "wxyz"
        };
        
        backtrack("", 0, digits, mapping, result);
        return result;
    }
    
private:
    void backtrack(string current, int index, string& digits, 
                   vector<string>& mapping, vector<string>& result) {
        if (index == digits.length()) {
            result.push_back(current);
            return;
        }
        
        string letters = mapping[digits[index] - '0'];
        for (char c : letters) {
            backtrack(current + c, index + 1, digits, mapping, result);
        }
    }
};`,
    notes: "Time: O(4^n), Space: O(n) for recursion stack",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking! Explores all possible combinations systematically.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean mapping from digit to letters using array indexing.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use iterative BFS approach to avoid recursion stack.",
      },
      {
        author: "AlternativeThinker",
        content: "For fixed input size, we could use nested loops, but backtracking handles variable length."
      }
    ]
  },

  {
    problemName: "Word Break",
    author: "Dynamic Programming Solver",
    explanation: "Use DP where dp[i] means first i characters can be segmented. For each position, check all possible word endings.",
    solution: `class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
        int n = s.length();
        vector<bool> dp(n + 1, false);
        dp[0] = true; // empty string
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.count(s.substr(j, i - j))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[n];
    }
};`,
    notes: "Time: O(n³) - O(n²) loops * O(n) substring, Space: O(n)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic DP approach! dp[i] represents segmentability up to index i.",
      },
      {
        author: "CodeReviewer42",
        content: "The break statement improves efficiency once a valid segmentation is found.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use trie for faster word lookups in the dictionary.",
      },
      {
        author: "AlternativeThinker",
        content: "BFS approach is also possible where we explore reachable indices."
      }
    ]
  },

  {
    problemName: "Decode String",
    author: "Stack Decoder",
    explanation: "Use stack to process encoded strings. Push current string and count when encountering '[', pop and decode when encountering ']'.",
    solution: `class Solution {
public:
    string decodeString(string s) {
        stack<pair<string, int>> st; // pair<current_string, repeat_count>
        string current = "";
        int count = 0;
        
        for (char c : s) {
            if (isdigit(c)) {
                count = count * 10 + (c - '0');
            } else if (c == '[') {
                st.push({current, count});
                current = "";
                count = 0;
            } else if (c == ']') {
                auto [prev, repeat] = st.top();
                st.pop();
                string temp = "";
                for (int i = 0; i < repeat; i++) {
                    temp += current;
                }
                current = prev + temp;
            } else {
                current += c;
            }
        }
        
        return current;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackDecoder",
        content: "Elegant stack-based decoding! Handles nested encodings naturally.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of pair to store both string and repeat count on stack.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple levels of nesting and consecutive numbers correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion, but stack approach is more intuitive."
      }
    ]
  },

  {
    problemName: "Find All Anagrams in a String",
    author: "Sliding Window Counter",
    explanation: "Use sliding window with frequency counts. Maintain counts of characters in current window and compare with target pattern.",
    solution: `class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> result;
        if (s.length() < p.length()) return result;
        
        vector<int> pCount(26, 0), sCount(26, 0);
        
        // Initialize frequency counts
        for (char c : p) {
            pCount[c - 'a']++;
        }
        
        int windowSize = p.length();
        
        // Initialize first window
        for (int i = 0; i < windowSize; i++) {
            sCount[s[i] - 'a']++;
        }
        
        if (pCount == sCount) {
            result.push_back(0);
        }
        
        // Slide the window
        for (int i = windowSize; i < s.length(); i++) {
            // Remove leftmost character
            sCount[s[i - windowSize] - 'a']--;
            // Add new character
            sCount[s[i] - 'a']++;
            
            if (pCount == sCount) {
                result.push_back(i - windowSize + 1);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SlidingWindowExpert",
        content: "Efficient sliding window with frequency arrays! O(1) space for English letters.",
      },
      {
        author: "CodeReviewer42",
        content: "Direct vector comparison makes the anagram check very clean.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use a single frequency array and a match counter for optimization.",
      },
      {
        author: "AlternativeThinker",
        content: "Hash map approach would work for Unicode but is slower for English."
      }
    ]
  },

  {
    problemName: "Permutation in String",
    author: "Sliding Window Matcher",
    explanation: "Similar to find all anagrams. Use sliding window to check if any window in s1 contains a permutation of s2.",
    solution: `class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        if (s1.length() > s2.length()) return false;
        
        vector<int> s1Count(26, 0), s2Count(26, 0);
        
        // Initialize frequency counts
        for (int i = 0; i < s1.length(); i++) {
            s1Count[s1[i] - 'a']++;
            s2Count[s2[i] - 'a']++;
        }
        
        if (s1Count == s2Count) {
            return true;
        }
        
        // Slide the window
        for (int i = s1.length(); i < s2.length(); i++) {
            // Remove leftmost character
            s2Count[s2[i - s1.length()] - 'a']--;
            // Add new character
            s2Count[s2[i] - 'a']++;
            
            if (s1Count == s2Count) {
                return true;
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SlidingWindowMaster",
        content: "Efficient permutation checking! Same technique as anagram finding.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean frequency array comparison for permutation check.",
      },
      {
        author: "OptimizationExpert",
        content: "We could optimize by tracking the number of matching characters.",
      },
      {
        author: "AlternativeThinker",
        content: "For very long strings, we could use rolling hash but this is sufficient."
      }
    ]
  },

  {
    problemName: "Basic Calculator II",
    author: "Stack Calculator",
    explanation: "Process string left to right. Use stack to handle precedence. For '+' and '-', push with sign. For '*' and '/', calculate immediately.",
    solution: `class Solution {
public:
    int calculate(string s) {
        stack<int> st;
        char operation = '+';
        int currentNumber = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            
            if (isdigit(c)) {
                currentNumber = currentNumber * 10 + (c - '0');
            }
            
            if ((!isdigit(c) && c != ' ') || i == s.length() - 1) {
                if (operation == '+') {
                    st.push(currentNumber);
                } else if (operation == '-') {
                    st.push(-currentNumber);
                } else if (operation == '*') {
                    int top = st.top();
                    st.pop();
                    st.push(top * currentNumber);
                } else if (operation == '/') {
                    int top = st.top();
                    st.pop();
                    st.push(top / currentNumber);
                }
                
                operation = c;
                currentNumber = 0;
            }
        }
        
        int result = 0;
        while (!st.empty()) {
            result += st.top();
            st.pop();
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "CalculatorExpert",
        content: "Smart stack handling! Deferred addition/subtraction, immediate multiplication/division.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of spaces and final character edge case.",
      },
      {
        author: "OptimizationExpert",
        content: "We could do this in O(1) space by tracking last number instead of using stack.",
      },
      {
        author: "AlternativeThinker",
        content: "Using stringstream would make parsing cleaner but less efficient."
      }
    ]
  },

  {
    problemName: "Integer to Roman",
    author: "Roman Numerals Builder",
    explanation: "Use greedy approach with sorted value-symbol pairs. Subtract largest possible values and append corresponding symbols.",
    solution: `class Solution {
public:
    string intToRoman(int num) {
        vector<pair<int, string>> values = {
            {1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"},
            {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"},
            {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}
        };
        
        string result = "";
        
        for (auto& [value, symbol] : values) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(1), Space: O(1)",
    comments: [
      {
        author: "RomanNumeralsExpert",
        content: "Greedy approach with sorted values! Handles all subtractive cases.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean use of vector of pairs for value-symbol mapping.",
      },
      {
        author: "OptimizationExpert",
        content: "Since Roman numerals have limited range, this is effectively O(1).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hardcoded arrays for thousands, hundreds, etc., but this is more maintainable."
      }
    ]
  },

  // Hard (5)
  {
    problemName: "Edit Distance",
    author: "Dynamic Programming Expert",
    explanation: "Use DP where dp[i][j] represents minimum operations to convert first i chars of word1 to first j chars of word2. Consider insert, delete, replace.",
    solution: `class Solution {
public:
    int minDistance(string word1, string word2) {
        int m = word1.length(), n = word2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Initialize base cases
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i; // delete all characters from word1
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j; // insert all characters into word1
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1[i - 1] == word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]; // no operation needed
                } else {
                    dp[i][j] = 1 + min({
                        dp[i - 1][j],    // delete from word1
                        dp[i][j - 1],    // insert into word1
                        dp[i - 1][j - 1] // replace
                    });
                }
            }
        }
        
        return dp[m][n];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "DPMaster",
        content: "Classic edit distance algorithm! Wagner-Fischer algorithm.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean DP formulation with three operations: insert, delete, replace.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize space to O(min(m,n)) by using two rows instead of full matrix.",
      },
      {
        author: "AlternativeThinker",
        content: "For similar strings, we could use Myers' bit-parallel algorithm for better performance."
      }
    ]
  },

  {
    problemName: "Regular Expression Matching",
    author: "Dynamic Programming Matcher",
    explanation: "Use DP where dp[i][j] means first i chars of s match first j chars of p. Handle '.' as any char and '*' as zero or more of preceding element.",
    solution: `class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true; // empty string matches empty pattern
        
        // Handle patterns like a*, a*b*, a*b*c* that can match empty string
        for (int j = 2; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j - 1] == '*') {
                    // Zero occurrence of preceding char
                    dp[i][j] = dp[i][j - 2];
                    // One or more occurrences if preceding char matches
                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                } else {
                    // Direct character match or '.'
                    if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                }
            }
        }
        
        return dp[m][n];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "RegexExpert",
        content: "Complex DP for regex matching! Handles all special cases correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of '*' with both zero and one-or-more occurrences.",
      },
      {
        author: "OptimizationExpert",
        content: "Space can be optimized to O(n) since we only need previous row.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use NFA simulation but DP is more straightforward."
      }
    ]
  },

  {
    problemName: "Wildcard Matching",
    author: "Dynamic Programming Wildcard",
    explanation: "Similar to regex but simpler. Use DP where '?' matches any single char, '*' matches any sequence. Handle '*' by matching zero or more characters.",
    solution: `class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true;
        
        // Handle patterns starting with '*' that can match empty string
        for (int j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j - 1] == '*') {
                    // '*' can match zero characters or one or more characters
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                } else if (p[j - 1] == '?' || p[j - 1] == s[i - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "WildcardExpert",
        content: "Clean DP for wildcard matching! Simpler than regex without precedence rules.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of '*' with both zero and one-or-more character matching.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize space to O(n) and add early termination for better performance.",
      },
      {
        author: "AlternativeThinker",
        content: "Two-pointer greedy approach works for many cases but DP is more general."
      }
    ]
  },

  {
    problemName: "Text Justification",
    author: "Line Formatter",
    explanation: "Greedy line packing. For each line, pack as many words as possible, then distribute spaces evenly. Handle last line separately.",
    solution: `class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> result;
        int i = 0, n = words.size();
        
        while (i < n) {
            // Find words that fit in current line
            int j = i, lineLength = 0;
            while (j < n && lineLength + words[j].length() + (j - i) <= maxWidth) {
                lineLength += words[j].length();
                j++;
            }
            
            // Build the line
            string line = "";
            int numWords = j - i;
            int totalSpaces = maxWidth - lineLength;
            
            // If last line or only one word, left justify
            if (j == n || numWords == 1) {
                for (int k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        line += " ";
                    }
                }
                // Add remaining spaces at the end
                line += string(maxWidth - line.length(), ' ');
            } else {
                // Distribute spaces evenly
                int spacesBetween = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);
                
                for (int k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        int spaces = spacesBetween + (k - i < extraSpaces ? 1 : 0);
                        line += string(spaces, ' ');
                    }
                }
            }
            
            result.push_back(line);
            i = j;
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TextFormattingExpert",
        content: "Comprehensive text justification! Handles all spacing rules correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good separation of last line case and multi-word line formatting.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single word lines and exact fitting correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could precompute line breaks for better organization."
      }
    ]
  },
  // ===== LINKED LIST SOLUTIONS =====
  
  // Easy (10)
  {
    problemName: "Reverse Linked List",
    author: "Pointer Reverser",
    explanation: "Use three pointers: previous, current, next. Iterate through the list, reversing the direction of pointers.",
    solution: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr != nullptr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "LinkedListMaster",
        content: "Classic iterative reversal! Clean three-pointer technique.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of temporary pointer to avoid losing reference to next node.",
      },
      {
        author: "RecursionFan",
        content: "We could use recursion for O(n) space, but iterative is more space efficient.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty list and single node list correctly."
      }
    ]
  },

  {
    problemName: "Merge Two Sorted Lists",
    author: "List Merger",
    explanation: "Use dummy node and compare nodes from both lists. Append the smaller node to the result list.",
    solution: `class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (list1 != nullptr && list2 != nullptr) {
            if (list1->val <= list2->val) {
                current->next = list1;
                list1 = list1->next;
            } else {
                current->next = list2;
                list2 = list2->next;
            }
            current = current->next;
        }
        
        // Append remaining nodes
        if (list1 != nullptr) {
            current->next = list1;
        } else {
            current->next = list2;
        }
        
        return dummy->next;
    }
};`,
    notes: "Time: O(n + m), Space: O(1)",
    comments: [
      {
        author: "MergeExpert",
        content: "Clean merge using dummy node! Avoids special cases for empty lists.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of remaining nodes after one list is exhausted.",
      },
      {
        author: "OptimizationExpert",
        content: "We could merge in-place without dummy node, but this is cleaner.",
      },
      {
        author: "AlternativeThinker",
        content: "Recursive solution is elegant but uses O(n+m) stack space."
      }
    ]
  },

  {
    problemName: "Linked List Cycle",
    author: "Cycle Detector",
    explanation: "Use Floyd's cycle detection algorithm (tortoise and hare). Slow pointer moves 1 step, fast pointer moves 2 steps. If they meet, cycle exists.",
    solution: `class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == nullptr || head->next == nullptr) {
            return false;
        }
        
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
            
            if (slow == fast) {
                return true;
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "CycleDetectionExpert",
        content: "Classic Floyd's algorithm! No extra space needed.",
      },
      {
        author: "CodeReviewer42",
        content: "Good bounds checking for fast pointer to avoid null pointer exceptions.",
      },
      {
        author: "MathGeek",
        content: "If there's a cycle, fast pointer will eventually meet slow pointer within O(n) time.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set for O(n) space, but this is optimal."
      }
    ]
  },

  {
    problemName: "Palindrome Linked List",
    author: "Palindrome Checker",
    explanation: "Find middle, reverse second half, compare both halves. Restore the list afterwards.",
    solution: `class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return true;
        }
        
        // Find middle using slow and fast pointers
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast->next != nullptr && fast->next->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        // Reverse second half
        ListNode* secondHalf = reverseList(slow->next);
        ListNode* firstHalf = head;
        
        // Compare both halves
        bool isPal = true;
        ListNode* temp = secondHalf;
        while (temp != nullptr) {
            if (firstHalf->val != temp->val) {
                isPal = false;
                break;
            }
            firstHalf = firstHalf->next;
            temp = temp->next;
        }
        
        // Restore the list
        slow->next = reverseList(secondHalf);
        
        return isPal;
    }
    
private:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr != nullptr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "PalindromeExpert",
        content: "Clever O(1) space solution! Finds middle, reverses, compares, then restores.",
      },
      {
        author: "CodeReviewer42",
        content: "Good practice to restore the original list structure.",
      },
      {
        author: "OptimizationExpert",
        content: "We could push values to stack for O(n) space simpler solution.",
      },
      {
        author: "AlternativeThinker",
        content: "Recursive approach possible but uses O(n) stack space."
      }
    ]
  },

  {
    problemName: "Remove Linked List Elements",
    author: "Element Remover",
    explanation: "Use dummy node to handle head removal. Iterate through list, skipping nodes with target value.",
    solution: `class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* current = dummy;
        
        while (current->next != nullptr) {
            if (current->next->val == val) {
                ListNode* toDelete = current->next;
                current->next = current->next->next;
                delete toDelete; // Free memory
            } else {
                current = current->next;
            }
        }
        
        return dummy->next;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "ListModifier",
        content: "Clean removal with dummy node! Handles head deletion elegantly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good memory management by deleting removed nodes.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles consecutive nodes to remove and empty list correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion but iterative is more space efficient."
      }
    ]
  },

  {
    problemName: "Middle of the Linked List",
    author: "Middle Finder",
    explanation: "Use slow and fast pointers. Slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at middle.",
    solution: `class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        return slow;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Classic tortoise and hare! Finds middle in single pass.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean and efficient. No extra space needed.",
      },
      {
        author: "EdgeCaseHunter",
        content: "For even length, returns second middle as required.",
      },
      {
        author: "AlternativeThinker",
        content: "We could count nodes then traverse to middle, but that takes two passes."
      }
    ]
  },

  {
    problemName: "Convert Binary Number in a Linked List to Integer",
    author: "Binary Converter",
    explanation: "Traverse list, accumulating binary value. For each node, shift left and add current value.",
    solution: `class Solution {
public:
    int getDecimalValue(ListNode* head) {
        int result = 0;
        ListNode* current = head;
        
        while (current != nullptr) {
            result = (result << 1) | current->val;
            current = current->next;
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "BitManipulationExpert",
        content: "Efficient bit manipulation! Left shift and OR operations.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean single pass solution. No extra data structures needed.",
      },
      {
        author: "MathGeek",
        content: "Equivalent to result = result * 2 + current->val, but bit operations are faster.",
      },
      {
        author: "AlternativeThinker",
        content: "We could reverse list first, but this direct approach is better."
      }
    ]
  },

  {
    problemName: "Intersection of Two Linked Lists",
    author: "Intersection Finder",
    explanation: "Use two pointers. When one reaches end, switch to other list. They will meet at intersection or both become null.",
    solution: `class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if (headA == nullptr || headB == nullptr) {
            return nullptr;
        }
        
        ListNode* ptrA = headA;
        ListNode* ptrB = headB;
        
        while (ptrA != ptrB) {
            ptrA = (ptrA == nullptr) ? headB : ptrA->next;
            ptrB = (ptrB == nullptr) ? headA : ptrB->next;
        }
        
        return ptrA;
    }
};`,
    notes: "Time: O(n + m), Space: O(1)",
    comments: [
      {
        author: "IntersectionExpert",
        content: "Clever two-pointer technique! Both pointers traverse same total distance.",
      },
      {
        author: "CodeReviewer42",
        content: "Elegant solution that handles no intersection case naturally.",
      },
      {
        author: "MathGeek",
        content: "Both pointers travel distance (A + B - common) so they meet at intersection.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set but that would require O(n) space."
      }
    ]
  },

  {
    problemName: "Delete Node in a Linked List",
    author: "Node Deleter",
    explanation: "Since we don't have access to previous node, copy next node's value to current node, then delete next node.",
    solution: `class Solution {
public:
    void deleteNode(ListNode* node) {
        // Copy next node's value to current node
        node->val = node->next->val;
        
        // Delete the next node
        ListNode* toDelete = node->next;
        node->next = node->next->next;
        delete toDelete;
    }
};`,
    notes: "Time: O(1), Space: O(1)",
    comments: [
      {
        author: "CreativeDeleter",
        content: "Clever workaround! Modifies value instead of pointer manipulation.",
      },
      {
        author: "CodeReviewer42",
        content: "Important to delete the next node to avoid memory leak.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Doesn't work for deleting last node, but problem guarantees node is not tail.",
      },
      {
        author: "AlternativeThinker",
        content: "We could iterate and shift all values, but this is O(1) time."
      }
    ]
  },

  {
    problemName: "Design Linked List",
    author: "LinkedList Designer",
    explanation: "Implement singly linked list with head, tail, and size. Handle all edge cases for get, addAtHead, addAtTail, addAtIndex, deleteAtIndex.",
    solution: `class MyLinkedList {
private:
    struct Node {
        int val;
        Node* next;
        Node(int x) : val(x), next(nullptr) {}
    };
    
    Node* head;
    Node* tail;
    int size;
    
public:
    MyLinkedList() {
        head = nullptr;
        tail = nullptr;
        size = 0;
    }
    
    int get(int index) {
        if (index < 0 || index >= size) return -1;
        
        Node* current = head;
        for (int i = 0; i < index; i++) {
            current = current->next;
        }
        return current->val;
    }
    
    void addAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
        if (size == 0) {
            tail = head;
        }
        size++;
    }
    
    void addAtTail(int val) {
        Node* newNode = new Node(val);
        if (size == 0) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
        size++;
    }
    
    void addAtIndex(int index, int val) {
        if (index < 0 || index > size) return;
        
        if (index == 0) {
            addAtHead(val);
        } else if (index == size) {
            addAtTail(val);
        } else {
            Node* current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current->next;
            }
            Node* newNode = new Node(val);
            newNode->next = current->next;
            current->next = newNode;
            size++;
        }
    }
    
    void deleteAtIndex(int index) {
        if (index < 0 || index >= size) return;
        
        if (index == 0) {
            Node* toDelete = head;
            head = head->next;
            delete toDelete;
            if (size == 1) {
                tail = nullptr;
            }
        } else {
            Node* current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current->next;
            }
            Node* toDelete = current->next;
            current->next = toDelete->next;
            if (index == size - 1) {
                tail = current;
            }
            delete toDelete;
        }
        size--;
    }
};`,
    notes: "Time: O(n) for get/delete, O(1) for addAtHead/addAtTail, Space: O(n)",
    comments: [
      {
        author: "DataStructureDesigner",
        content: "Comprehensive linked list implementation! Handles all edge cases.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of tail pointer for O(1) addAtTail operations.",
      },
      {
        author: "MemoryManager",
        content: "Proper memory management with delete operations.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use doubly linked list for O(1) deletions but more memory."
      }
    ]
  },

  // Medium (10)
  {
    problemName: "Remove Nth Node From End of List",
    author: "Two Pointer Remover",
    explanation: "Use two pointers with n gap. When fast reaches end, slow is at node before target. Remove target node.",
    solution: `class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        
        ListNode* fast = dummy;
        ListNode* slow = dummy;
        
        // Move fast n+1 steps ahead
        for (int i = 0; i <= n; i++) {
            fast = fast->next;
        }
        
        // Move both until fast reaches end
        while (fast != nullptr) {
            slow = slow->next;
            fast = fast->next;
        }
        
        // Remove the nth node
        ListNode* toDelete = slow->next;
        slow->next = slow->next->next;
        delete toDelete;
        
        return dummy->next;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerMaster",
        content: "Classic two-pointer technique! Maintains n+1 gap for easy deletion.",
      },
      {
        author: "CodeReviewer42",
        content: "Dummy node handles head deletion elegantly.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where n equals list length (head deletion).",
      },
      {
        author: "AlternativeThinker",
        content: "We could calculate length first, but this is one-pass."
      }
    ]
  },

  {
    problemName: "Copy List with Random Pointer",
    author: "List Copier",
    explanation: "Three steps: 1) Create copy nodes interweaved with original, 2) Set random pointers for copies, 3) Separate the two lists.",
    solution: `/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/
class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (head == nullptr) return nullptr;
        
        // Step 1: Create copy nodes interweaved
        Node* current = head;
        while (current != nullptr) {
            Node* copy = new Node(current->val);
            copy->next = current->next;
            current->next = copy;
            current = copy->next;
        }
        
        // Step 2: Set random pointers for copies
        current = head;
        while (current != nullptr) {
            if (current->random != nullptr) {
                current->next->random = current->random->next;
            }
            current = current->next->next;
        }
        
        // Step 3: Separate the two lists
        current = head;
        Node* copyHead = head->next;
        Node* copyCurrent = copyHead;
        
        while (current != nullptr) {
            current->next = current->next->next;
            if (copyCurrent->next != nullptr) {
                copyCurrent->next = copyCurrent->next->next;
            }
            current = current->next;
            copyCurrent = copyCurrent->next;
        }
        
        return copyHead;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "ListCopyExpert",
        content: "Brilliant O(1) space solution! Interweaving copies makes random pointer assignment easy.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean three-step process: interweave, set random, separate.",
      },
      {
        author: "MemoryManager",
        content: "Creates deep copy without using hash map for O(n) space.",
      },
      {
        author: "AlternativeThinker",
        content: "Hash map approach is simpler but uses O(n) space."
      }
    ]
  },

  {
    problemName: "Add Two Numbers",
    author: "Digit Adder",
    explanation: "Simulate digit-by-digit addition with carry. Process both lists until all digits and carry are handled.",
    solution: `class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        int carry = 0;
        
        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int sum = carry;
            
            if (l1 != nullptr) {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2 != nullptr) {
                sum += l2->val;
                l2 = l2->next;
            }
            
            carry = sum / 10;
            current->next = new ListNode(sum % 10);
            current = current->next;
        }
        
        return dummy->next;
    }
};`,
    notes: "Time: O(max(m,n)), Space: O(max(m,n))",
    comments: [
      {
        author: "AdditionExpert",
        content: "Clean digit-by-digit addition simulation! Handles different length lists.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of final carry when both lists are exhausted.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases like 5+5=10 and 999+1=1000 correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could convert to numbers then back, but that might cause overflow."
      }
    ]
  },

  {
    problemName: "Sort List",
    author: "Merge Sort Specialist",
    explanation: "Use merge sort: find middle, recursively sort both halves, then merge sorted halves.",
    solution: `class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        
        // Find middle
        ListNode* mid = getMiddle(head);
        ListNode* left = head;
        ListNode* right = mid->next;
        mid->next = nullptr;
        
        // Recursively sort both halves
        left = sortList(left);
        right = sortList(right);
        
        // Merge sorted halves
        return merge(left, right);
    }
    
private:
    ListNode* getMiddle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head->next;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        return slow;
    }
    
    ListNode* merge(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (l1 != nullptr && l2 != nullptr) {
            if (l1->val <= l2->val) {
                current->next = l1;
                l1 = l1->next;
            } else {
                current->next = l2;
                l2 = l2->next;
            }
            current = current->next;
        }
        
        if (l1 != nullptr) {
            current->next = l1;
        } else {
            current->next = l2;
        }
        
        return dummy->next;
    }
};`,
    notes: "Time: O(n log n), Space: O(log n) for recursion stack",
    comments: [
      {
        author: "SortingExpert",
        content: "Classic merge sort for linked lists! O(n log n) time guaranteed.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation: find middle, recursive sort, merge.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use iterative bottom-up merge sort for O(1) space.",
      },
      {
        author: "AlternativeThinker",
        content: "Quick sort is possible but merge sort is more stable for linked lists."
      }
    ]
  },

  {
    problemName: "Reorder List",
    author: "List Reorganizer",
    explanation: "Three steps: 1) Find middle, 2) Reverse second half, 3) Merge first and reversed second halves alternately.",
    solution: `class Solution {
public:
    void reorderList(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return;
        }
        
        // Step 1: Find middle
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast->next != nullptr && fast->next->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        // Step 2: Reverse second half
        ListNode* second = reverseList(slow->next);
        slow->next = nullptr;
        ListNode* first = head;
        
        // Step 3: Merge alternately
        while (second != nullptr) {
            ListNode* temp1 = first->next;
            ListNode* temp2 = second->next;
            
            first->next = second;
            second->next = temp1;
            
            first = temp1;
            second = temp2;
        }
    }
    
private:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr != nullptr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "ListReorderingExpert",
        content: "Clever three-step approach! Finds middle, reverses, then interweaves.",
      },
      {
        author: "CodeReviewer42",
        content: "Good pointer manipulation during the merge step.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles both even and odd length lists correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use stack for second half but that would use O(n) space."
      }
    ]
  },

  {
    problemName: "Flatten a Multilevel Doubly Linked List",
    author: "List Flattener",
    explanation: "Use DFS approach. When encountering a child, flatten it and insert between current and next nodes.",
    solution: `/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* prev;
    Node* next;
    Node* child;
};
*/
class Solution {
public:
    Node* flatten(Node* head) {
        if (head == nullptr) return nullptr;
        
        Node* current = head;
        while (current != nullptr) {
            if (current->child != nullptr) {
                // Save next node
                Node* next = current->next;
                
                // Flatten the child list
                Node* child = flatten(current->child);
                current->child = nullptr;
                
                // Connect current to child
                current->next = child;
                child->prev = current;
                
                // Find tail of child list
                Node* tail = child;
                while (tail->next != nullptr) {
                    tail = tail->next;
                }
                
                // Connect tail to next
                tail->next = next;
                if (next != nullptr) {
                    next->prev = tail;
                }
                
                current = next;
            } else {
                current = current->next;
            }
        }
        
        return head;
    }
};`,
    notes: "Time: O(n), Space: O(n) for recursion stack",
    comments: [
      {
        author: "MultilevelExpert",
        content: "DFS approach! Recursively flattens child lists before proceeding.",
      },
      {
        author: "CodeReviewer42",
        content: "Good pointer manipulation connecting current, child, and next nodes.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple levels of nesting and preserves doubly linked structure.",
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach with stack is also possible."
      }
    ]
  },

  {
    problemName: "LRU Cache",
    author: "Cache Designer",
    explanation: "Combine hash map for O(1) lookups with doubly linked list for O(1) removals. Maintain most recent at head, least recent at tail.",
    solution: `class LRUCache {
private:
    struct Node {
        int key, value;
        Node *prev, *next;
        Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}
    };
    
    unordered_map<int, Node*> cache;
    Node *head, *tail;
    int capacity;
    
    void addToFront(Node* node) {
        node->next = head->next;
        node->prev = head;
        head->next->prev = node;
        head->next = node;
    }
    
    void removeNode(Node* node) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }
    
    void moveToFront(Node* node) {
        removeNode(node);
        addToFront(node);
    }
    
    Node* removeTail() {
        Node* node = tail->prev;
        removeNode(node);
        return node;
    }
    
public:
    LRUCache(int capacity) : capacity(capacity) {
        head = new Node(-1, -1);
        tail = new Node(-1, -1);
        head->next = tail;
        tail->prev = head;
    }
    
    int get(int key) {
        if (!cache.count(key)) {
            return -1;
        }
        Node* node = cache[key];
        moveToFront(node);
        return node->value;
    }
    
    void put(int key, int value) {
        if (cache.count(key)) {
            Node* node = cache[key];
            node->value = value;
            moveToFront(node);
        } else {
            if (cache.size() == capacity) {
                Node* tailNode = removeTail();
                cache.erase(tailNode->key);
                delete tailNode;
            }
            Node* newNode = new Node(key, value);
            cache[key] = newNode;
            addToFront(newNode);
        }
    }
};`,
    notes: "Time: O(1) for both operations, Space: O(capacity)",
    comments: [
      {
        author: "CacheDesignExpert",
        content: "Classic LRU implementation! Hash map + doubly linked list for O(1) operations.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of linked list operations into helper functions.",
      },
      {
        author: "MemoryManager",
        content: "Good use of dummy head and tail nodes to simplify edge cases.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use ordered dict in some languages, but this is fundamental."
      }
    ]
  },

  {
    problemName: "Odd Even Linked List",
    author: "List Separator",
    explanation: "Maintain two lists: odd and even. Connect odd nodes together and even nodes together, then connect odd tail to even head.",
    solution: `class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        
        ListNode* odd = head;
        ListNode* even = head->next;
        ListNode* evenHead = even;
        
        while (even != nullptr && even->next != nullptr) {
            odd->next = even->next;
            odd = odd->next;
            even->next = odd->next;
            even = even->next;
        }
        
        odd->next = evenHead;
        return head;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "ListSeparator",
        content: "Clean in-place separation! Maintains two lists and connects them.",
      },
      {
        author: "CodeReviewer42",
        content: "Good pointer manipulation updating both odd and even lists simultaneously.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles both even and odd length lists correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use extra arrays but this is O(1) space."
      }
    ]
  },

  {
    problemName: "Partition List",
    author: "List Partitioner",
    explanation: "Maintain two lists: one for nodes less than x, one for nodes >= x. Then connect the two lists.",
    solution: `class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
        ListNode* beforeHead = new ListNode(0);
        ListNode* afterHead = new ListNode(0);
        ListNode* before = beforeHead;
        ListNode* after = afterHead;
        
        ListNode* current = head;
        while (current != nullptr) {
            if (current->val < x) {
                before->next = current;
                before = before->next;
            } else {
                after->next = current;
                after = after->next;
            }
            current = current->next;
        }
        
        // Connect the two lists
        after->next = nullptr;
        before->next = afterHead->next;
        
        return beforeHead->next;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "PartitionExpert",
        content: "Clean two-list approach! Maintains relative order within partitions.",
      },
      {
        author: "CodeReviewer42",
        content: "Important to set after->next to nullptr to avoid cycles.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where all nodes are less than or greater than x.",
      },
      {
        author: "AlternativeThinker",
        content: "We could do in-place but this is cleaner and maintains stability."
      }
    ]
  },

  // Hard (5)
  {
    problemName: "Merge k Sorted Lists",
    author: "List Merger",
    explanation: "Use min-heap to always get the smallest node from all lists. Add nodes to result and push next nodes to heap.",
    solution: `class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto compare = [](ListNode* a, ListNode* b) {
            return a->val > b->val;
        };
        priority_queue<ListNode*, vector<ListNode*>, decltype(compare)> minHeap(compare);
        
        // Add all non-null heads to heap
        for (ListNode* list : lists) {
            if (list != nullptr) {
                minHeap.push(list);
            }
        }
        
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (!minHeap.empty()) {
            ListNode* smallest = minHeap.top();
            minHeap.pop();
            
            current->next = smallest;
            current = current->next;
            
            if (smallest->next != nullptr) {
                minHeap.push(smallest->next);
            }
        }
        
        return dummy->next;
    }
};`,
    notes: "Time: O(n log k) where n is total nodes, k is number of lists, Space: O(k)",
    comments: [
      {
        author: "HeapMaster",
        content: "Efficient min-heap approach! Always processes smallest available node.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean use of lambda for custom comparator in priority queue.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use divide and conquer merge for O(1) space but O(n log k) time.",
      },
      {
        author: "AlternativeThinker",
        content: "Pairwise merging is also possible but heap is more elegant."
      }
    ]
  },

  {
    problemName: "Reverse Nodes in k-Group",
    author: "Group Reverser",
    explanation: "Reverse nodes in groups of k. For each group, reverse normally and connect to previous and next groups.",
    solution: `class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prevGroupEnd = dummy;
        
        while (true) {
            // Check if there are k nodes left
            ListNode* kth = getKth(prevGroupEnd, k);
            if (kth == nullptr) {
                break;
            }
            
            ListNode* nextGroupStart = kth->next;
            ListNode* groupStart = prevGroupEnd->next;
            
            // Reverse the current group
            ListNode* prev = nextGroupStart;
            ListNode* curr = groupStart;
            while (curr != nextGroupStart) {
                ListNode* nextTemp = curr->next;
                curr->next = prev;
                prev = curr;
                curr = nextTemp;
            }
            
            // Connect previous group to reversed group
            prevGroupEnd->next = prev;
            prevGroupEnd = groupStart;
        }
        
        return dummy->next;
    }
    
private:
    ListNode* getKth(ListNode* node, int k) {
        while (node != nullptr && k > 0) {
            node = node->next;
            k--;
        }
        return node;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "GroupReversalExpert",
        content: "Efficient group reversal! Handles partial groups at the end correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of helper function to check for k nodes remaining.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where k=1 and k equals list length.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion but iterative is more space efficient."
      }
    ]
  },

  {
    problemName: "LFU Cache",
    author: "Frequency Cache Designer",
    explanation: "Use three data structures: keyToNode map, frequencyToNodes map (linked hash set), and minFrequency tracker. Maintain nodes in frequency groups.",
    solution: `class LFUCache {
private:
    struct Node {
        int key, value, freq;
        Node(int k, int v) : key(k), value(v), freq(1) {}
    };
    
    int capacity, minFreq;
    unordered_map<int, list<Node>::iterator> keyToNode;
    unordered_map<int, list<Node>> freqToNodes;
    
    void updateFrequency(int key) {
        auto it = keyToNode[key];
        Node node = *it;
        
        // Remove from current frequency list
        freqToNodes[node.freq].erase(it);
        if (freqToNodes[node.freq].empty()) {
            freqToNodes.erase(node.freq);
            if (minFreq == node.freq) {
                minFreq++;
            }
        }
        
        // Insert into higher frequency list
        node.freq++;
        freqToNodes[node.freq].push_front(node);
        keyToNode[key] = freqToNodes[node.freq].begin();
    }
    
public:
    LFUCache(int capacity) : capacity(capacity), minFreq(0) {}
    
    int get(int key) {
        if (!keyToNode.count(key)) {
            return -1;
        }
        updateFrequency(key);
        return keyToNode[key]->value;
    }
    
    void put(int key, int value) {
        if (capacity == 0) return;
        
        if (keyToNode.count(key)) {
            keyToNode[key]->value = value;
            updateFrequency(key);
        } else {
            if (keyToNode.size() == capacity) {
                // Remove LFU node (and LRU if multiple)
                auto& minFreqList = freqToNodes[minFreq];
                int keyToRemove = minFreqList.back().key;
                minFreqList.pop_back();
                keyToNode.erase(keyToRemove);
                if (minFreqList.empty()) {
                    freqToNodes.erase(minFreq);
                }
            }
            
            // Add new node
            minFreq = 1;
            freqToNodes[1].push_front(Node(key, value));
            keyToNode[key] = freqToNodes[1].begin();
        }
    }
};`,
    notes: "Time: O(1) for both operations, Space: O(capacity)",
    comments: [
      {
        author: "CacheDesignMaster",
        content: "Complex LFU implementation! Maintains frequency groups with LRU within each group.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of multiple data structures for O(1) operations.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient frequency update with minFrequency tracking.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use balanced BST but hash maps + linked lists are more efficient."
      }
    ]
  },

  {
    problemName: "All O`one Data Structure",
    author: "Frequency Data Structure Designer",
    explanation: "Use hash map for key to frequency, and doubly linked list of frequency buckets. Each bucket contains keys with that frequency.",
    solution: `class AllOne {
private:
    struct Bucket {
        int freq;
        unordered_set<string> keys;
        Bucket(int f) : freq(f) {}
    };
    
    unordered_map<string, list<Bucket>::iterator> keyToBucket;
    list<Bucket> buckets; // sorted by frequency
    
public:
    AllOne() {}
    
    void inc(string key) {
        if (!keyToBucket.count(key)) {
            // Key doesn't exist, add to freq 1 bucket
            if (buckets.empty() || buckets.front().freq != 1) {
                buckets.push_front(Bucket(1));
            }
            buckets.front().keys.insert(key);
            keyToBucket[key] = buckets.begin();
        } else {
            // Key exists, move to next frequency bucket
            auto currBucket = keyToBucket[key];
            int newFreq = currBucket->freq + 1;
            auto nextBucket = next(currBucket);
            
            // Remove from current bucket
            currBucket->keys.erase(key);
            
            // Insert into next bucket or create new one
            if (nextBucket == buckets.end() || nextBucket->freq != newFreq) {
                nextBucket = buckets.insert(nextBucket, Bucket(newFreq));
            }
            nextBucket->keys.insert(key);
            keyToBucket[key] = nextBucket;
            
            // Remove current bucket if empty
            if (currBucket->keys.empty()) {
                buckets.erase(currBucket);
            }
        }
    }
    
    void dec(string key) {
        if (!keyToBucket.count(key)) return;
        
        auto currBucket = keyToBucket[key];
        int newFreq = currBucket->freq - 1;
        
        // Remove from current bucket
        currBucket->keys.erase(key);
        
        if (newFreq > 0) {
            auto prevBucket = prev(currBucket);
            if (currBucket == buckets.begin() || prevBucket->freq != newFreq) {
                prevBucket = buckets.insert(currBucket, Bucket(newFreq));
            }
            prevBucket->keys.insert(key);
            keyToBucket[key] = prevBucket;
        } else {
            keyToBucket.erase(key);
        }
        
        // Remove current bucket if empty
        if (currBucket->keys.empty()) {
            buckets.erase(currBucket);
        }
    }
    
    string getMaxKey() {
        return buckets.empty() ? "" : *buckets.back().keys.begin();
    }
    
    string getMinKey() {
        return buckets.empty() ? "" : *buckets.front().keys.begin();
    }
};`,
    notes: "Time: O(1) for all operations, Space: O(n)",
    comments: [
      {
        author: "DataStructureExpert",
        content: "Sophisticated design! Buckets with frequencies and linked list for ordering.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean handling of bucket creation and deletion.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient O(1) operations for all required methods.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use multiple heaps but this design is more efficient."
      }
    ]
  },

  {
    problemName: "Design Skiplist",
    author: "Skiplist Designer",
    explanation: "Implement probabilistic skip list with multiple levels. Each node has forward pointers to nodes in higher levels.",
    solution: `struct Node {
    int val;
    vector<Node*> forward;
    Node(int v, int level) : val(v), forward(level, nullptr) {}
};

class Skiplist {
private:
    constexpr static int MAX_LEVEL = 16;
    constexpr static double P = 0.5;
    
    Node* head;
    int level;
    random_device rd;
    mt19937 gen;
    uniform_real_distribution<> dis;
    
    int randomLevel() {
        int lvl = 1;
        while (dis(gen) < P && lvl < MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
public:
    Skiplist() : head(new Node(-1, MAX_LEVEL)), level(1), gen(rd()), dis(0.0, 1.0) {}
    
    bool search(int target) {
        Node* curr = head;
        for (int i = level - 1; i >= 0; i--) {
            while (curr->forward[i] != nullptr && curr->forward[i]->val < target) {
                curr = curr->forward[i];
            }
        }
        curr = curr->forward[0];
        return curr != nullptr && curr->val == target;
    }
    
    void add(int num) {
        vector<Node*> update(MAX_LEVEL, nullptr);
        Node* curr = head;
        
        for (int i = level - 1; i >= 0; i--) {
            while (curr->forward[i] != nullptr && curr->forward[i]->val < num) {
                curr = curr->forward[i];
            }
            update[i] = curr;
        }
        
        int newLevel = randomLevel();
        if (newLevel > level) {
            for (int i = level; i < newLevel; i++) {
                update[i] = head;
            }
            level = newLevel;
        }
        
        Node* newNode = new Node(num, newLevel);
        for (int i = 0; i < newLevel; i++) {
            newNode->forward[i] = update[i]->forward[i];
            update[i]->forward[i] = newNode;
        }
    }
    
    bool erase(int num) {
        vector<Node*> update(MAX_LEVEL, nullptr);
        Node* curr = head;
        
        for (int i = level - 1; i >= 0; i--) {
            while (curr->forward[i] != nullptr && curr->forward[i]->val < num) {
                curr = curr->forward[i];
            }
            update[i] = curr;
        }
        
        curr = curr->forward[0];
        if (curr == nullptr || curr->val != num) {
            return false;
        }
        
        for (int i = 0; i < level; i++) {
            if (update[i]->forward[i] != curr) {
                break;
            }
            update[i]->forward[i] = curr->forward[i];
        }
        
        delete curr;
        
        while (level > 1 && head->forward[level - 1] == nullptr) {
            level--;
        }
        
        return true;
    }
};`,
    notes: "Time: O(log n) average for all operations, Space: O(n)",
    comments: [
      {
        author: "SkiplistExpert",
        content: "Classic probabilistic skip list implementation! O(log n) search, insert, delete.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of random level generation for probabilistic balancing.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient search using multiple levels for fast traversal.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use balanced BST but skiplist is simpler and has good average performance."
      }
    ]
  },
  // ===== BINARY TREE SOLUTIONS =====
  
  // Easy (12)
  {
    problemName: "Maximum Depth of Binary Tree",
    author: "Tree Depth Calculator",
    explanation: "Use DFS recursion. The depth is 1 + max(left depth, right depth). Base case: null node has depth 0.",
    solution: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }
        return 1 + max(maxDepth(root->left), maxDepth(root->right));
    }
};`,
    notes: "Time: O(n), Space: O(h) where h is tree height",
    comments: [
      {
        author: "TreeExpert",
        content: "Classic recursive DFS! Simple and elegant solution.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean base case handling for null nodes.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS for iterative solution, but recursive is more intuitive.",
      },
      {
        author: "AlternativeThinker",
        content: "For very deep trees, iterative DFS with stack would avoid stack overflow."
      }
    ]
  },

  {
    problemName: "Same Tree",
    author: "Tree Comparator",
    explanation: "Use DFS recursion. Check if current nodes are equal, then recursively check left and right subtrees.",
    solution: `class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == nullptr && q == nullptr) {
            return true;
        }
        if (p == nullptr || q == nullptr) {
            return false;
        }
        if (p->val != q->val) {
            return false;
        }
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TreeComparisonExpert",
        content: "Clean recursive comparison! Handles all cases: both null, one null, values different.",
      },
      {
        author: "CodeReviewer42",
        content: "Good ordering of checks: null cases first, then value comparison.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use iterative BFS with queue for O(n) space.",
      },
      {
        author: "AlternativeThinker",
        content: "For very unbalanced trees, iterative might be better to avoid stack overflow."
      }
    ]
  },

  {
    problemName: "Invert Binary Tree",
    author: "Tree Inverter",
    explanation: "Use DFS recursion. Swap left and right children, then recursively invert both subtrees.",
    solution: `class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (root == nullptr) {
            return nullptr;
        }
        
        // Swap left and right children
        TreeNode* temp = root->left;
        root->left = root->right;
        root->right = temp;
        
        // Recursively invert subtrees
        invertTree(root->left);
        invertTree(root->right);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TreeManipulationExpert",
        content: "Classic tree inversion! Simple recursive swapping.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean in-place modification. Returns the original root.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use iterative BFS with queue for O(n) space.",
      },
      {
        author: "AlternativeThinker",
        content: "For very large trees, iterative approach avoids recursion stack limits."
      }
    ]
  },

  {
    problemName: "Symmetric Tree",
    author: "Symmetry Checker",
    explanation: "Use helper function to compare two trees symmetrically. Check if left subtree is mirror of right subtree.",
    solution: `class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (root == nullptr) {
            return true;
        }
        return isMirror(root->left, root->right);
    }
    
private:
    bool isMirror(TreeNode* left, TreeNode* right) {
        if (left == nullptr && right == nullptr) {
            return true;
        }
        if (left == nullptr || right == nullptr) {
            return false;
        }
        if (left->val != right->val) {
            return false;
        }
        return isMirror(left->left, right->right) && isMirror(left->right, right->left);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "SymmetryExpert",
        content: "Clever mirror comparison! Compares left->left with right->right and left->right with right->left.",
      },
      {
        author: "CodeReviewer42",
        content: "Good separation into helper function for cleaner logic.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use iterative approach with queue for O(n) space.",
      },
      {
        author: "AlternativeThinker",
        content: "For very wide trees, iterative BFS might be more memory efficient."
      }
    ]
  },

  {
    problemName: "Path Sum",
    author: "Path Sum Checker",
    explanation: "Use DFS recursion. Subtract current value from target sum. If leaf node and remaining sum equals node value, path found.",
    solution: `class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (root == nullptr) {
            return false;
        }
        
        // Check if current node is leaf and path sum equals target
        if (root->left == nullptr && root->right == nullptr) {
            return targetSum == root->val;
        }
        
        // Recursively check left and right subtrees
        int remainingSum = targetSum - root->val;
        return hasPathSum(root->left, remainingSum) || hasPathSum(root->right, remainingSum);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "PathSumExpert",
        content: "Clean DFS approach! Accumulates sum by subtracting node values.",
      },
      {
        author: "CodeReviewer42",
        content: "Good leaf node check: both children are null.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles negative values and zero correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative DFS with stack storing both node and remaining sum."
      }
    ]
  },

  {
    problemName: "Binary Tree Inorder Traversal",
    author: "Tree Traverser",
    explanation: "Use iterative approach with stack. Go left until null, then process node, then go right.",
    solution: `class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        stack<TreeNode*> st;
        TreeNode* current = root;
        
        while (current != nullptr || !st.empty()) {
            // Go to the leftmost node
            while (current != nullptr) {
                st.push(current);
                current = current->left;
            }
            
            // Process the node
            current = st.top();
            st.pop();
            result.push_back(current->val);
            
            // Go to right subtree
            current = current->right;
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TraversalExpert",
        content: "Classic iterative inorder traversal! Uses stack to simulate recursion.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean while loop conditions handle both current node and stack state.",
      },
      {
        author: "OptimizationExpert",
        content: "More space efficient than recursion for deep trees.",
      },
      {
        author: "AlternativeThinker",
        content: "Morris traversal can do this in O(1) space but is more complex."
      }
    ]
  },

  {
    problemName: "Binary Tree Preorder Traversal",
    author: "Tree Traverser",
    explanation: "Use iterative approach with stack. Process node first, then push right child, then left child.",
    solution: `class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        stack<TreeNode*> st;
        st.push(root);
        
        while (!st.empty()) {
            TreeNode* node = st.top();
            st.pop();
            result.push_back(node->val);
            
            // Push right first, then left (so left is processed first)
            if (node->right != nullptr) {
                st.push(node->right);
            }
            if (node->left != nullptr) {
                st.push(node->left);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TraversalExpert",
        content: "Clean iterative preorder! Processes root, then right, then left (due to stack LIFO).",
      },
      {
        author: "CodeReviewer42",
        content: "Good ordering: push right before left so left gets processed first.",
      },
      {
        author: "OptimizationExpert",
        content: "More space efficient than recursion for unbalanced trees.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Morris traversal for O(1) space."
      }
    ]
  },

  {
    problemName: "Binary Tree Postorder Traversal",
    author: "Tree Traverser",
    explanation: "Use iterative approach with two stacks. First stack for processing, second stack for result.",
    solution: `class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        stack<TreeNode*> st1, st2;
        st1.push(root);
        
        while (!st1.empty()) {
            TreeNode* node = st1.top();
            st1.pop();
            st2.push(node);
            
            if (node->left != nullptr) {
                st1.push(node->left);
            }
            if (node->right != nullptr) {
                st1.push(node->right);
            }
        }
        
        while (!st2.empty()) {
            result.push_back(st2.top()->val);
            st2.pop();
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TraversalExpert",
        content: "Clever two-stack approach! First stack processes in root-right-left order, second stack reverses to left-right-root.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation. Pushes left then right to get correct order after reversal.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use single stack with state tracking, but this is simpler.",
      },
      {
        author: "AlternativeThinker",
        content: "Morris traversal can do this in O(1) space but is complex."
      }
    ]
  },

  {
    problemName: "Convert Sorted Array to Binary Search Tree",
    author: "BST Builder",
    explanation: "Use binary search approach. Middle element becomes root, recursively build left and right subtrees from left and right halves.",
    solution: `class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return buildBST(nums, 0, nums.size() - 1);
    }
    
private:
    TreeNode* buildBST(vector<int>& nums, int left, int right) {
        if (left > right) {
            return nullptr;
        }
        
        // Middle element becomes root
        int mid = left + (right - left) / 2;
        TreeNode* root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root->left = buildBST(nums, left, mid - 1);
        root->right = buildBST(nums, mid + 1, right);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(log n) for recursion stack",
    comments: [
      {
        author: "BSTExpert",
        content: "Classic divide and conquer! Always picks middle element for balanced BST.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive construction with proper bounds checking.",
      },
      {
        author: "OptimizationExpert",
        content: "Produces perfectly balanced BST due to always choosing middle element.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative approach but recursive is more natural for tree construction."
      }
    ]
  },

  {
    problemName: "Balanced Binary Tree",
    author: "Balance Checker",
    explanation: "Use DFS to compute height. If subtree is unbalanced, return -1. Otherwise return height.",
    solution: `class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return checkHeight(root) != -1;
    }
    
private:
    int checkHeight(TreeNode* node) {
        if (node == nullptr) {
            return 0;
        }
        
        int leftHeight = checkHeight(node->left);
        if (leftHeight == -1) return -1;
        
        int rightHeight = checkHeight(node->right);
        if (rightHeight == -1) return -1;
        
        if (abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        
        return 1 + max(leftHeight, rightHeight);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "BalanceExpert",
        content: "Efficient O(n) solution! Combines height calculation with balance checking.",
      },
      {
        author: "CodeReviewer42",
        content: "Smart use of -1 to indicate unbalanced subtree.",
      },
      {
        author: "OptimizationExpert",
        content: "Avoids redundant height calculations by checking balance during height computation.",
      },
      {
        author: "AlternativeThinker",
        content: "We could compute heights separately but that would be O(n²) in worst case."
      }
    ]
  },

  {
    problemName: "Minimum Depth of Binary Tree",
    author: "Depth Calculator",
    explanation: "Use BFS to find the first leaf node. The depth of first leaf is the minimum depth.",
    solution: `class Solution {
public:
    int minDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }
        
        queue<TreeNode*> q;
        q.push(root);
        int depth = 1;
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                
                // Check if this is a leaf node
                if (node->left == nullptr && node->right == nullptr) {
                    return depth;
                }
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
            depth++;
        }
        
        return depth;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "BFSExpert",
        content: "Efficient BFS approach! Stops at first leaf node encountered.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean level-order traversal with depth tracking.",
      },
      {
        author: "OptimizationExpert",
        content: "More efficient than DFS for finding minimum depth in unbalanced trees.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS but BFS is optimal for minimum depth."
      }
    ]
  },

  {
    problemName: "Diameter of Binary Tree",
    author: "Diameter Calculator",
    explanation: "For each node, diameter through that node is left height + right height. Track maximum diameter during DFS.",
    solution: `class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int diameter = 0;
        calculateHeight(root, diameter);
        return diameter;
    }
    
private:
    int calculateHeight(TreeNode* node, int& diameter) {
        if (node == nullptr) {
            return 0;
        }
        
        int leftHeight = calculateHeight(node->left, diameter);
        int rightHeight = calculateHeight(node->right, diameter);
        
        // Update diameter if path through current node is larger
        diameter = max(diameter, leftHeight + rightHeight);
        
        return 1 + max(leftHeight, rightHeight);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TreeMetricsExpert",
        content: "Clever O(n) solution! Combines height calculation with diameter tracking.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of reference parameter to track maximum diameter.",
      },
      {
        author: "OptimizationExpert",
        content: "Computes diameter in same pass as height calculation.",
      },
      {
        author: "AlternativeThinker",
        content: "We could compute heights separately but that would be less efficient."
      }
    ]
  },

  // Medium (15)
  {
    problemName: "Binary Tree Level Order Traversal",
    author: "Level Order Traverser",
    explanation: "Use BFS with queue. Process each level, store nodes in result level by level.",
    solution: `class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<vector<int>> result;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            vector<int> currentLevel;
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                currentLevel.push_back(node->val);
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
            
            result.push_back(currentLevel);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "BFSTraversalExpert",
        content: "Classic BFS level order traversal! Clean implementation.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of levelSize to process each level separately.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal for level order traversal. DFS would be less intuitive.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS with level tracking, but BFS is more natural."
      }
    ]
  },

  {
    problemName: "Validate Binary Search Tree",
    author: "BST Validator",
    explanation: "Use DFS with min and max bounds. Each node must be between min and max. Update bounds recursively.",
    solution: `class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return validate(root, LONG_MIN, LONG_MAX);
    }
    
private:
    bool validate(TreeNode* node, long minVal, long maxVal) {
        if (node == nullptr) {
            return true;
        }
        
        if (node->val <= minVal || node->val >= maxVal) {
            return false;
        }
        
        return validate(node->left, minVal, node->val) && 
               validate(node->right, node->val, maxVal);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "BSTValidationExpert",
        content: "Elegant bounds checking! Each node must be in (min, max) range.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of LONG_MIN/MAX to handle edge cases with INT_MIN/INT_MAX.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use inorder traversal to check if sorted, but this is more direct.",
      },
      {
        author: "AlternativeThinker",
        content: "Iterative inorder traversal would use O(h) space instead of recursion stack."
      }
    ]
  },

  {
    problemName: "Kth Smallest Element in a BST",
    author: "BST Traverser",
    explanation: "Use iterative inorder traversal. Stop when kth element is found.",
    solution: `class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        stack<TreeNode*> st;
        TreeNode* current = root;
        int count = 0;
        
        while (current != nullptr || !st.empty()) {
            while (current != nullptr) {
                st.push(current);
                current = current->left;
            }
            
            current = st.top();
            st.pop();
            count++;
            
            if (count == k) {
                return current->val;
            }
            
            current = current->right;
        }
        
        return -1; // Should not reach here if k is valid
    }
};`,
    notes: "Time: O(h + k), Space: O(h)",
    comments: [
      {
        author: "BSTSearchExpert",
        content: "Efficient iterative inorder! Stops early when kth element is found.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean counter implementation. No unnecessary traversals.",
      },
      {
        author: "OptimizationExpert",
        content: "Better than O(n) solution when k is small compared to n.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursive inorder but iterative gives better space control."
      }
    ]
  },

  {
    problemName: "Construct Binary Tree from Preorder and Inorder Traversal",
    author: "Tree Constructor",
    explanation: "Use recursion. First element in preorder is root. Find root in inorder to split left and right subtrees.",
    solution: `class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        unordered_map<int, int> inorderMap;
        for (int i = 0; i < inorder.size(); i++) {
            inorderMap[inorder[i]] = i;
        }
        return build(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1, inorderMap);
    }
    
private:
    TreeNode* build(vector<int>& preorder, int preStart, int preEnd,
                   vector<int>& inorder, int inStart, int inEnd,
                   unordered_map<int, int>& inorderMap) {
        if (preStart > preEnd || inStart > inEnd) {
            return nullptr;
        }
        
        // Root is first element in preorder
        TreeNode* root = new TreeNode(preorder[preStart]);
        int rootIndex = inorderMap[root->val];
        int leftSize = rootIndex - inStart;
        
        // Recursively build left and right subtrees
        root->left = build(preorder, preStart + 1, preStart + leftSize,
                          inorder, inStart, rootIndex - 1, inorderMap);
        root->right = build(preorder, preStart + leftSize + 1, preEnd,
                           inorder, rootIndex + 1, inEnd, inorderMap);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TreeConstructionExpert",
        content: "Classic tree construction! Uses hash map for O(1) inorder lookups.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive construction with proper index calculations.",
      },
      {
        author: "OptimizationExpert",
        content: "Hash map makes root finding O(1) instead of O(n) linear search.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative approach but recursive is more intuitive."
      }
    ]
  },

  {
    problemName: "Construct Binary Tree from Inorder and Postorder Traversal",
    author: "Tree Constructor",
    explanation: "Use recursion. Last element in postorder is root. Find root in inorder to split left and right subtrees.",
    solution: `class Solution {
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        unordered_map<int, int> inorderMap;
        for (int i = 0; i < inorder.size(); i++) {
            inorderMap[inorder[i]] = i;
        }
        return build(inorder, 0, inorder.size() - 1, postorder, 0, postorder.size() - 1, inorderMap);
    }
    
private:
    TreeNode* build(vector<int>& inorder, int inStart, int inEnd,
                   vector<int>& postorder, int postStart, int postEnd,
                   unordered_map<int, int>& inorderMap) {
        if (inStart > inEnd || postStart > postEnd) {
            return nullptr;
        }
        
        // Root is last element in postorder
        TreeNode* root = new TreeNode(postorder[postEnd]);
        int rootIndex = inorderMap[root->val];
        int leftSize = rootIndex - inStart;
        
        // Recursively build left and right subtrees
        root->left = build(inorder, inStart, rootIndex - 1,
                          postorder, postStart, postStart + leftSize - 1, inorderMap);
        root->right = build(inorder, rootIndex + 1, inEnd,
                           postorder, postStart + leftSize, postEnd - 1, inorderMap);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TreeConstructionExpert",
        content: "Mirror of preorder-inorder construction! Uses postorder's last element as root.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean index calculations for postorder ranges.",
      },
      {
        author: "OptimizationExpert",
        content: "Hash map makes construction efficient.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative approach with stack."
      }
    ]
  },

  {
    problemName: "Lowest Common Ancestor of a Binary Tree",
    author: "LCA Finder",
    explanation: "Use DFS recursion. If current node is p or q, return it. Recursively search left and right. If both sides return non-null, current is LCA.",
    solution: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr || root == p || root == q) {
            return root;
        }
        
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        
        if (left != nullptr && right != nullptr) {
            return root;
        }
        
        return left != nullptr ? left : right;
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "LCAExpert",
        content: "Elegant recursive solution! Returns LCA when both subtrees contain targets.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean base cases and combination logic.",
      },
      {
        author: "OptimizationExpert",
        content: "Handles cases where one node is ancestor of another.",
      },
      {
        author: "AlternativeThinker",
        content: "We could store parent pointers and find intersection, but this is simpler."
      }
    ]
  },

  {
    problemName: "Binary Tree Right Side View",
    author: "Right View Traverser",
    explanation: "Use BFS level order traversal. For each level, take the last node (rightmost node).",
    solution: `class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                
                // Last node in current level
                if (i == levelSize - 1) {
                    result.push_back(node->val);
                }
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TreeViewExpert",
        content: "Clean BFS approach! Takes last node of each level for right side view.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of levelSize to identify last node in each level.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use DFS with level tracking, but BFS is more intuitive.",
      },
      {
        author: "AlternativeThinker",
        content: "DFS would be more space efficient for very wide trees."
      }
    ]
  },

  {
    problemName: "Count Complete Tree Nodes",
    author: "Node Counter",
    explanation: "Use binary search. Check if left and right heights are equal. If equal, use formula 2^h - 1. Otherwise recurse.",
    solution: `class Solution {
public:
    int countNodes(TreeNode* root) {
        if (root == nullptr) return 0;
        
        int leftHeight = getHeight(root->left);
        int rightHeight = getHeight(root->right);
        
        if (leftHeight == rightHeight) {
            // Left subtree is perfect binary tree
            return (1 << leftHeight) + countNodes(root->right);
        } else {
            // Right subtree is perfect binary tree
            return (1 << rightHeight) + countNodes(root->left);
        }
    }
    
private:
    int getHeight(TreeNode* node) {
        int height = 0;
        while (node != nullptr) {
            height++;
            node = node->left;
        }
        return height;
    }
};`,
    notes: "Time: O(log² n), Space: O(log n)",
    comments: [
      {
        author: "CompleteTreeExpert",
        content: "Clever binary search approach! Uses height to determine perfect subtrees.",
      },
      {
        author: "CodeReviewer42",
        content: "Efficient O(log² n) solution instead of O(n).",
      },
      {
        author: "OptimizationExpert",
        content: "Uses bit shifting for power of two calculations.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use simple DFS but that would be O(n)."
      }
    ]
  },

  {
    problemName: "Serialize and Deserialize Binary Tree",
    author: "Tree Serializer",
    explanation: "Use preorder traversal with null markers. For serialization, use 'X' for null. For deserialization, rebuild tree recursively.",
    solution: `class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        if (root == nullptr) {
            return "X,";
        }
        
        string left = serialize(root->left);
        string right = serialize(root->right);
        
        return to_string(root->val) + "," + left + right;
    }
    
    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        queue<string> nodes;
        stringstream ss(data);
        string item;
        
        while (getline(ss, item, ',')) {
            nodes.push(item);
        }
        
        return buildTree(nodes);
    }
    
private:
    TreeNode* buildTree(queue<string>& nodes) {
        string val = nodes.front();
        nodes.pop();
        
        if (val == "X") {
            return nullptr;
        }
        
        TreeNode* root = new TreeNode(stoi(val));
        root->left = buildTree(nodes);
        root->right = buildTree(nodes);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "SerializationExpert",
        content: "Clean preorder serialization! Uses 'X' for null markers.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of queue for efficient deserialization.",
      },
      {
        author: "OptimizationExpert",
        content: "Compact representation with comma separation.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use level order but preorder is more space efficient."
      }
    ]
  },

  {
    problemName: "Flatten Binary Tree to Linked List",
    author: "Tree Flattener",
    explanation: "Use postorder traversal. Flatten right subtree, then left subtree, then attach them to root's right.",
    solution: `class Solution {
public:
    void flatten(TreeNode* root) {
        if (root == nullptr) return;
        
        flatten(root->left);
        flatten(root->right);
        
        // Save right subtree
        TreeNode* right = root->right;
        
        // Move left subtree to right
        root->right = root->left;
        root->left = nullptr;
        
        // Find the end of new right subtree and attach original right
        TreeNode* current = root;
        while (current->right != nullptr) {
            current = current->right;
        }
        current->right = right;
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TreeFlatteningExpert",
        content: "Clever postorder approach! Processes children before modifying parent.",
      },
      {
        author: "CodeReviewer42",
        content: "Good pointer manipulation to preserve original right subtree.",
      },
      {
        author: "OptimizationExpert",
        content: "In-place modification without extra data structures.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative approach with stack for O(n) space."
      }
    ]
  },

  {
    problemName: "Populating Next Right Pointers in Each Node",
    author: "Next Pointer Populator",
    explanation: "Use level order traversal. For each level, connect nodes from left to right. Handle perfect binary tree property.",
    solution: `/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;
    Node() : val(0), left(NULL), right(NULL), next(NULL) {}
    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}
    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/
class Solution {
public:
    Node* connect(Node* root) {
        if (root == nullptr) return nullptr;
        
        Node* leftmost = root;
        
        while (leftmost->left != nullptr) {
            Node* current = leftmost;
            
            while (current != nullptr) {
                // Connect left child to right child
                current->left->next = current->right;
                
                // Connect right child to next node's left child
                if (current->next != nullptr) {
                    current->right->next = current->next->left;
                }
                
                current = current->next;
            }
            
            leftmost = leftmost->left;
        }
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "NextPointerExpert",
        content: "Elegant O(1) space solution! Uses perfect binary tree property.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean level-by-level processing without queue.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal for perfect binary trees. No extra space needed.",
      },
      {
        author: "AlternativeThinker",
        content: "For non-perfect trees, we'd need level order traversal with queue."
      }
    ]
  },

  {
    problemName: "Sum Root to Leaf Numbers",
    author: "Path Sum Calculator",
    explanation: "Use DFS recursion. Accumulate number along path. When leaf reached, add to total sum.",
    solution: `class Solution {
public:
    int sumNumbers(TreeNode* root) {
        return dfs(root, 0);
    }
    
private:
    int dfs(TreeNode* node, int currentSum) {
        if (node == nullptr) {
            return 0;
        }
        
        currentSum = currentSum * 10 + node->val;
        
        // If leaf node, return the number
        if (node->left == nullptr && node->right == nullptr) {
            return currentSum;
        }
        
        return dfs(node->left, currentSum) + dfs(node->right, currentSum);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "PathSumExpert",
        content: "Clean DFS accumulation! Builds number digit by digit.",
      },
      {
        author: "CodeReviewer42",
        content: "Good leaf node check and sum accumulation.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient single pass solution.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative DFS with stack storing both node and current sum."
      }
    ]
  },

  {
    problemName: "House Robber III",
    author: "Tree DP Expert",
    explanation: "Use DP with DFS. For each node, return [rob_this_node, skip_this_node]. rob = node.val + left.skip + right.skip, skip = max(left) + max(right).",
    solution: `class Solution {
public:
    int rob(TreeNode* root) {
        auto result = dfs(root);
        return max(result[0], result[1]);
    }
    
private:
    vector<int> dfs(TreeNode* node) {
        if (node == nullptr) {
            return {0, 0};
        }
        
        vector<int> left = dfs(node->left);
        vector<int> right = dfs(node->right);
        
        // rob current node: node->val + skip left + skip right
        int rob = node->val + left[1] + right[1];
        
        // skip current node: max of left (rob or skip) + max of right (rob or skip)
        int skip = max(left[0], left[1]) + max(right[0], right[1]);
        
        return {rob, skip};
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TreeDPExpert",
        content: "Elegant DP solution! Returns [rob, skip] for each subtree.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive DP with proper state tracking.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal O(n) solution with memoization built into recursion.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use memoization with hash map but recursion handles it naturally."
      }
    ]
  },

  {
    problemName: "Path Sum III",
    author: "Path Counter",
    explanation: "Use DFS with prefix sum. Track cumulative sum and use hash map to count paths ending at current node with target sum.",
    solution: `class Solution {
public:
    int pathSum(TreeNode* root, int targetSum) {
        unordered_map<long, int> prefixSum;
        prefixSum[0] = 1; // Base case: sum 0 appears once
        return dfs(root, 0, targetSum, prefixSum);
    }
    
private:
    int dfs(TreeNode* node, long currentSum, int target, unordered_map<long, int>& prefixSum) {
        if (node == nullptr) {
            return 0;
        }
        
        currentSum += node->val;
        int count = prefixSum[currentSum - target];
        
        prefixSum[currentSum]++;
        
        count += dfs(node->left, currentSum, target, prefixSum);
        count += dfs(node->right, currentSum, target, prefixSum);
        
        prefixSum[currentSum]--; // Backtrack
        
        return count;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PathCountingExpert",
        content: "Clever prefix sum approach! Similar to subarray sum equals k.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of hash map to track prefix sums and backtracking.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient O(n) solution instead of O(n²) naive approach.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use double DFS but that would be O(n²)."
      }
    ]
  },

  {
    problemName: "Find Largest Value in Each Tree Row",
    author: "Level Max Finder",
    explanation: "Use BFS level order traversal. For each level, track the maximum value.",
    solution: `class Solution {
public:
    vector<int> largestValues(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            int maxVal = INT_MIN;
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                maxVal = max(maxVal, node->val);
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
            
            result.push_back(maxVal);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "LevelTraversalExpert",
        content: "Clean BFS approach! Tracks maximum value for each level.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of levelSize to process each level separately.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use DFS with level tracking, but BFS is more natural.",
      },
      {
        author: "AlternativeThinker",
        content: "DFS would be more space efficient for very wide trees."
      }
    ]
  },

  // Hard (8)
  {
    problemName: "Binary Tree Maximum Path Sum",
    author: "Path Sum Expert",
    explanation: "Use DFS. For each node, compute max path sum through that node. Track global maximum. Return max single path for recursion.",
    solution: `class Solution {
public:
    int maxPathSum(TreeNode* root) {
        int maxSum = INT_MIN;
        dfs(root, maxSum);
        return maxSum;
    }
    
private:
    int dfs(TreeNode* node, int& maxSum) {
        if (node == nullptr) {
            return 0;
        }
        
        // Compute max path sums for left and right subtrees
        int leftMax = max(0, dfs(node->left, maxSum));
        int rightMax = max(0, dfs(node->right, maxSum));
        
        // Update global maximum with path through current node
        maxSum = max(maxSum, leftMax + rightMax + node->val);
        
        // Return max single path (can only take one branch)
        return node->val + max(leftMax, rightMax);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "PathSumMaster",
        content: "Elegant DFS solution! Tracks both global max and returns single path max.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of max(0, ...) to handle negative paths.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal O(n) solution with single pass.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative postorder but recursive is cleaner."
      }
    ]
  },

  {
    problemName: "Serialize and Deserialize BST",
    author: "BST Serializer",
    explanation: "Use preorder traversal. For BST, we can reconstruct without null markers using value ranges.",
    solution: `class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        if (root == nullptr) return "";
        return to_string(root->val) + "," + serialize(root->left) + serialize(root->right);
    }
    
    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        if (data.empty()) return nullptr;
        
        stringstream ss(data);
        string item;
        vector<int> values;
        
        while (getline(ss, item, ',')) {
            values.push_back(stoi(item));
        }
        
        return buildBST(values, 0, values.size() - 1);
    }
    
private:
    TreeNode* buildBST(vector<int>& values, int start, int end) {
        if (start > end) return nullptr;
        
        TreeNode* root = new TreeNode(values[start]);
        
        // Find first value greater than root (start of right subtree)
        int rightStart = start + 1;
        while (rightStart <= end && values[rightStart] < values[start]) {
            rightStart++;
        }
        
        root->left = buildBST(values, start + 1, rightStart - 1);
        root->right = buildBST(values, rightStart, end);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "BSTSerializationExpert",
        content: "Clever BST-specific serialization! No null markers needed due to BST property.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of BST property to split left and right subtrees.",
      },
      {
        author: "OptimizationExpert",
        content: "More compact than general binary tree serialization.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use the same method as general binary tree but this is more efficient."
      }
    ]
  },

  {
    problemName: "Recover Binary Search Tree",
    author: "BST Repairer",
    explanation: "Use inorder traversal to find two swapped nodes. Track first, middle, last violations of BST property.",
    solution: `class Solution {
public:
    void recoverTree(TreeNode* root) {
        TreeNode* first = nullptr;
        TreeNode* middle = nullptr;
        TreeNode* last = nullptr;
        TreeNode* prev = nullptr;
        
        inorder(root, prev, first, middle, last);
        
        if (first && last) {
            swap(first->val, last->val);
        } else if (first && middle) {
            swap(first->val, middle->val);
        }
    }
    
private:
    void inorder(TreeNode* node, TreeNode*& prev, TreeNode*& first, TreeNode*& middle, TreeNode*& last) {
        if (node == nullptr) return;
        
        inorder(node->left, prev, first, middle, last);
        
        if (prev != nullptr && node->val < prev->val) {
            if (first == nullptr) {
                first = prev;
                middle = node;
            } else {
                last = node;
            }
        }
        prev = node;
        
        inorder(node->right, prev, first, middle, last);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "BSTRepairExpert",
        content: "Clever inorder traversal! Tracks violations to identify swapped nodes.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of both adjacent and non-adjacent swapped nodes.",
      },
      {
        author: "OptimizationExpert",
        content: "O(1) space with Morris traversal possible but more complex.",
      },
      {
        author: "AlternativeThinker",
        content: "We could store inorder traversal and find swapped elements, but this is O(1) space."
      }
    ]
  },

  {
    problemName: "Vertical Order Traversal of a Binary Tree",
    author: "Vertical Traverser",
    explanation: "Use BFS with column tracking. Store nodes by column and row. Sort nodes in same (col, row) by value.",
    solution: `class Solution {
public:
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        if (root == nullptr) return {};
        
        map<int, map<int, multiset<int>>> nodes; // col -> row -> values
        queue<pair<TreeNode*, pair<int, int>>> q; // node, <col, row>
        q.push({root, {0, 0}});
        
        while (!q.empty()) {
            auto [node, pos] = q.front();
            q.pop();
            int col = pos.first, row = pos.second;
            
            nodes[col][row].insert(node->val);
            
            if (node->left != nullptr) {
                q.push({node->left, {col - 1, row + 1}});
            }
            if (node->right != nullptr) {
                q.push({node->right, {col + 1, row + 1}});
            }
        }
        
        vector<vector<int>> result;
        for (auto& [col, rows] : nodes) {
            vector<int> column;
            for (auto& [row, values] : rows) {
                column.insert(column.end(), values.begin(), values.end());
            }
            result.push_back(column);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "VerticalTraversalExpert",
        content: "Comprehensive BFS with coordinate tracking! Handles sorting requirements.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of nested maps and multisets for proper ordering.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use DFS but BFS ensures proper row ordering.",
      },
      {
        author: "AlternativeThinker",
        content: "We could store all nodes and sort once at the end."
      }
    ]
  },

  {
    problemName: "Binary Tree Cameras",
    author: "Camera Placer",
    explanation: "Use DFS with state: 0=not covered, 1=covered by camera, 2=has camera. Place cameras at nodes that are not covered.",
    solution: `class Solution {
public:
    int minCameraCover(TreeNode* root) {
        int cameras = 0;
        int rootState = dfs(root, cameras);
        
        // If root is not covered, need to place camera at root
        if (rootState == 0) {
            cameras++;
        }
        
        return cameras;
    }
    
private:
    // 0: not covered
    // 1: covered by camera
    // 2: has camera
    int dfs(TreeNode* node, int& cameras) {
        if (node == nullptr) {
            return 1; // null nodes are considered covered
        }
        
        int left = dfs(node->left, cameras);
        int right = dfs(node->right, cameras);
        
        // If any child is not covered, place camera here
        if (left == 0 || right == 0) {
            cameras++;
            return 2;
        }
        
        // If any child has camera, this node is covered
        if (left == 2 || right == 2) {
            return 1;
        }
        
        // Otherwise, this node is not covered
        return 0;
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "CameraPlacementExpert",
        content: "Clever state machine! Places cameras only when necessary.",
      },
      {
        author: "CodeReviewer42",
        content: "Good state definitions and transition logic.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal greedy solution. Places cameras at uncovered nodes' parents.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with more states but this is elegant."
      }
    ]
  },

  {
    problemName: "Sum of Distances in Tree",
    author: "Tree Distance Calculator",
    explanation: "Use two DFS passes. First pass computes subtree sizes and sum of distances from root. Second pass computes distances for all nodes using rerooting.",
    solution: `class Solution {
public:
    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        // Build adjacency list
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        
        vector<int> count(n, 1); // subtree node count
        vector<int> res(n, 0);   // sum of distances
        
        // First DFS: compute count and res for root 0
        dfs1(0, -1, graph, count, res);
        
        // Second DFS: compute res for all nodes
        dfs2(0, -1, graph, count, res, n);
        
        return res;
    }
    
private:
    void dfs1(int node, int parent, vector<vector<int>>& graph, vector<int>& count, vector<int>& res) {
        for (int neighbor : graph[node]) {
            if (neighbor == parent) continue;
            dfs1(neighbor, node, graph, count, res);
            count[node] += count[neighbor];
            res[node] += res[neighbor] + count[neighbor];
        }
    }
    
    void dfs2(int node, int parent, vector<vector<int>>& graph, vector<int>& count, vector<int>& res, int n) {
        for (int neighbor : graph[node]) {
            if (neighbor == parent) continue;
            // When moving root from node to neighbor:
            // - count[neighbor] nodes get 1 closer
            // - (n - count[neighbor]) nodes get 1 farther
            res[neighbor] = res[node] - count[neighbor] + (n - count[neighbor]);
            dfs2(neighbor, node, graph, count, res, n);
        }
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TreeDistanceExpert",
        content: "Brilliant rerooting technique! Two DFS passes compute all distances efficiently.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean mathematical formula for distance transfer during rerooting.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal O(n) solution instead of O(n²) naive approach.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use BFS from each node but that would be O(n²)."
      }
    ]
  },

  {
    problemName: "Number of Ways to Reorder Array to Get Same BST",
    author: "BST Counting Expert",
    explanation: "Use recursion with combinatorics. For each root, left and right subtrees can be interleaved in C(n-1, left_size) ways.",
    solution: `class Solution {
public:
    int numOfWays(vector<int>& nums) {
        int n = nums.size();
        // Precompute combinations using Pascal's triangle
        comb = vector<vector<long>>(n + 1, vector<long>(n + 1, 0));
        for (int i = 0; i <= n; i++) {
            comb[i][0] = comb[i][i] = 1;
            for (int j = 1; j < i; j++) {
                comb[i][j] = (comb[i-1][j-1] + comb[i-1][j]) % MOD;
            }
        }
        
        return (dfs(nums) - 1) % MOD;
    }
    
private:
    const int MOD = 1e9 + 7;
    vector<vector<long>> comb;
    
    long dfs(vector<int>& nums) {
        int n = nums.size();
        if (n <= 2) return 1;
        
        vector<int> left, right;
        int root = nums[0];
        
        for (int i = 1; i < n; i++) {
            if (nums[i] < root) {
                left.push_back(nums[i]);
            } else {
                right.push_back(nums[i]);
            }
        }
        
        long leftWays = dfs(left);
        long rightWays = dfs(right);
        
        // Number of interleavings: C(n-1, left.size())
        return (comb[n-1][left.size()] * ((leftWays * rightWays) % MOD)) % MOD;
    }
};`,
    notes: "Time: O(n²), Space: O(n²)",
    comments: [
      {
        author: "BSTCountingExpert",
        content: "Elegant combinatorial solution! Uses recursion with combination counting.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of Pascal's triangle for efficient combination calculation.",
      },
      {
        author: "OptimizationExpert",
        content: "We could compute combinations on the fly but precomputation is efficient.",
      },
      {
        author: "AlternativeThinker",
        content: "Dynamic programming approach is also possible but recursive is cleaner."
      }
    ]
  },

  {
    problemName: "Step-By-Step Directions From a Binary Tree Node to Another",
    author: "Path Finder",
    explanation: "Find LCA of start and dest. Build path from start to LCA (all 'U'), then from LCA to dest.",
    solution: `class Solution {
public:
    string getDirections(TreeNode* root, int startValue, int destValue) {
        // Find paths from root to start and dest
        string startPath, destPath;
        findPath(root, startValue, startPath);
        findPath(root, destValue, destPath);
        
        // Find common prefix (path to LCA)
        int i = 0;
        while (i < startPath.length() && i < destPath.length() && startPath[i] == destPath[i]) {
            i++;
        }
        
        // From start to LCA: all 'U'
        string result = string(startPath.length() - i, 'U');
        
        // From LCA to dest: remaining dest path
        result += destPath.substr(i);
        
        return result;
    }
    
private:
    bool findPath(TreeNode* node, int target, string& path) {
        if (node == nullptr) return false;
        if (node->val == target) return true;
        
        // Try left subtree
        path.push_back('L');
        if (findPath(node->left, target, path)) return true;
        path.pop_back();
        
        // Try right subtree
        path.push_back('R');
        if (findPath(node->right, target, path)) return true;
        path.pop_back();
        
        return false;
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "PathFindingExpert",
        content: "Clever LCA-based approach! Builds paths and finds common prefix.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean path building with backtracking.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient O(n) solution with single DFS for each path.",
      },
      {
        author: "AlternativeThinker",
        content: "We could find LCA directly but building paths is simpler."
      }
    ]
  },
  // ===== DYNAMIC PROGRAMMING SOLUTIONS =====
  
  // Easy (10)
  {
    problemName: "Climbing Stairs",
    author: "DP Sequence Expert",
    explanation: "Use Fibonacci-like sequence. Ways to reach step n = ways(n-1) + ways(n-2). Base cases: 1 way for step 1, 2 ways for step 2.",
    solution: `class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        
        int prev1 = 1, prev2 = 2;
        for (int i = 3; i <= n; i++) {
            int current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }
        return prev2;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic Fibonacci DP! Optimal O(1) space solution.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean iterative approach with two variables.",
      },
      {
        author: "MathGeek",
        content: "This is essentially the Fibonacci sequence shifted by one position.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use matrix exponentiation for O(log n) time but that's overkill."
      }
    ]
  },

  {
    problemName: "House Robber",
    author: "DP Decision Maker",
    explanation: "For each house, choose max(rob current + max from i-2, skip current + max from i-1).",
    solution: `class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;
        if (n == 1) return nums[0];
        
        int prev2 = 0, prev1 = nums[0];
        for (int i = 1; i < n; i++) {
            int current = max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic 1D DP! Tracks two previous states for optimal decision making.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean state transition: rob current or skip current.",
      },
      {
        author: "OptimizationExpert",
        content: "O(1) space instead of O(n) DP array.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion with memoization but iterative is more efficient."
      }
    ]
  },

  {
    problemName: "Divisor Game",
    author: "Game Theory Expert",
    explanation: "Mathematical solution: Alice wins if n is even, loses if n is odd.",
    solution: `class Solution {
public:
    bool divisorGame(int n) {
        return n % 2 == 0;
    }
};`,
    notes: "Time: O(1), Space: O(1)",
    comments: [
      {
        author: "GameTheoryExpert",
        content: "Elegant mathematical solution! Even numbers guarantee win for Alice.",
      },
      {
        author: "CodeReviewer42",
        content: "Simplest possible implementation. No DP needed.",
      },
      {
        author: "MathGeek",
        content: "Proof: For even n, Alice can always choose 1, leaving odd n for Bob. Odd numbers have only odd divisors.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with O(n²) time but this is optimal."
      }
    ]
  },

  {
    problemName: "Fibonacci Number",
    author: "Sequence Calculator",
    explanation: "Classic Fibonacci sequence. F(n) = F(n-1) + F(n-2) with base cases F(0)=0, F(1)=1.",
    solution: `class Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;
        
        int prev1 = 0, prev2 = 1;
        for (int i = 2; i <= n; i++) {
            int current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }
        return prev2;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SequenceExpert",
        content: "Classic iterative Fibonacci! Optimal O(1) space.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with two variables.",
      },
      {
        author: "OptimizationExpert",
        content: "Better than recursion which would be O(2^n) without memoization.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use matrix exponentiation for O(log n) time."
      }
    ]
  },

  {
    problemName: "N-th Tribonacci Number",
    author: "Sequence Calculator",
    explanation: "Tribonacci sequence: T(n) = T(n-1) + T(n-2) + T(n-3) with base cases T(0)=0, T(1)=1, T(2)=1.",
    solution: `class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) return 0;
        if (n <= 2) return 1;
        
        int a = 0, b = 1, c = 1;
        for (int i = 3; i <= n; i++) {
            int d = a + b + c;
            a = b;
            b = c;
            c = d;
        }
        return c;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SequenceExpert",
        content: "Tribonacci extension of Fibonacci! Uses three variables.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean iterative approach with three state variables.",
      },
      {
        author: "OptimizationExpert",
        content: "O(1) space instead of O(n) DP array.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use matrix exponentiation for O(log n) time."
      }
    ]
  },

  {
    problemName: "Min Cost Climbing Stairs",
    author: "DP Cost Minimizer",
    explanation: "For each step, min cost to reach it = cost[i] + min(cost to reach i-1, cost to reach i-2). Start from step 0 or 1.",
    solution: `class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        int prev1 = 0, prev2 = 0;
        
        for (int i = 2; i <= n; i++) {
            int current = min(prev1 + cost[i-1], prev2 + cost[i-2]);
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "DPExpert",
        content: "Similar to climbing stairs but with costs! Minimizes total cost.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean state transition considering costs from previous steps.",
      },
      {
        author: "OptimizationExpert",
        content: "O(1) space with two variables tracking previous states.",
      },
      {
        author: "AlternativeThinker",
        content: "We could start from the end and work backwards."
      }
    ]
  },

  {
    problemName: "Counting Bits",
    author: "Bit Counter",
    explanation: "Use DP: number of 1's in i = number of 1's in i/2 + (i % 2). Even easier: bits[i] = bits[i >> 1] + (i & 1).",
    solution: `class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> bits(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            bits[i] = bits[i >> 1] + (i & 1);
        }
        return bits;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "BitManipulationExpert",
        content: "Clever DP relation! Uses right shift and bitwise AND.",
      },
      {
        author: "CodeReviewer42",
        content: "Elegant formula: bits[i] = bits[i/2] + (i % 2).",
      },
      {
        author: "OptimizationExpert",
        content: "O(n) time with single pass, better than O(n log n) naive approach.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use built-in popcount but that might not be O(1) per number."
      }
    ]
  },

  {
    problemName: "Is Subsequence",
    author: "Two Pointer Matcher",
    explanation: "Use two pointers. Move through both strings. If characters match, move both pointers. Otherwise, move only s pointer.",
    solution: `class Solution {
public:
    bool isSubsequence(string s, string t) {
        int i = 0, j = 0;
        while (i < s.length() && j < t.length()) {
            if (s[i] == t[j]) {
                i++;
            }
            j++;
        }
        return i == s.length();
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Simple two pointer approach! Efficient O(n) solution.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with early termination.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal for single queries. For multiple queries, preprocess t.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP for multiple queries but this is optimal for single query."
      }
    ]
  },

  // Medium (15)
  {
    problemName: "Coin Change",
    author: "DP Minimizer",
    explanation: "DP where dp[i] = min coins to make amount i. For each amount, try all coins: dp[i] = min(dp[i], 1 + dp[i - coin]).",
    solution: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = min(dp[i], 1 + dp[i - coin]);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
};`,
    notes: "Time: O(amount * n), Space: O(amount)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic unbounded knapsack DP! Minimizes number of coins.",
      },
      {
        author: "CodeReviewer42",
        content: "Good initialization with amount+1 as infinity equivalent.",
      },
      {
        author: "OptimizationExpert",
        content: "We could sort coins and break early for optimization.",
      },
      {
        author: "AlternativeThinker",
        content: "BFS approach is also possible but DP is more standard."
      }
    ]
  },

  {
    problemName: "Longest Increasing Subsequence",
    author: "DP Sequence Finder",
    explanation: "Use DP with binary search. Maintain active list where tails[i] = smallest ending value of LIS of length i+1.",
    solution: `class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> tails;
        for (int num : nums) {
            auto it = lower_bound(tails.begin(), tails.end(), num);
            if (it == tails.end()) {
                tails.push_back(num);
            } else {
                *it = num;
            }
        }
        return tails.size();
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "LISExpert",
        content: "Patience sorting algorithm! O(n log n) instead of O(n²) DP.",
      },
      {
        author: "CodeReviewer42",
        content: "Clever use of lower_bound to maintain increasing sequence.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal O(n log n) solution. Much better than naive DP.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use segment trees or Fenwick trees for same complexity."
      }
    ]
  },

  {
    problemName: "Unique Paths",
    author: "DP Grid Traverser",
    explanation: "DP where dp[i][j] = paths to reach (i,j). dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and column are 1.",
    solution: `class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m, vector<int>(n, 1));
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        
        return dp[m-1][n-1];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic grid DP! Sum paths from left and top.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean initialization: first row and column are all 1s.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize to O(n) space by reusing single row.",
      },
      {
        author: "AlternativeThinker",
        content: "Combinatorial solution: C(m+n-2, m-1) but might overflow."
      }
    ]
  },

  {
    problemName: "Longest Common Subsequence",
    author: "DP String Matcher",
    explanation: "DP where dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1]. If chars match: 1 + dp[i-1][j-1], else max(dp[i-1][j], dp[i][j-1]).",
    solution: `class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.length(), n = text2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1[i-1] == text2[j-1]) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        return dp[m][n];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "StringDPExpert",
        content: "Classic LCS algorithm! Foundational DP problem.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean state transition for match and mismatch cases.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize to O(min(m,n)) space.",
      },
      {
        author: "AlternativeThinker",
        content: "We could reconstruct the sequence by backtracking."
      }
    ]
  },

  {
    problemName: "Partition Equal Subset Sum",
    author: "DP Subset Finder",
    explanation: "Subset sum problem. Check if there's a subset that sums to total/2. DP where dp[i] = whether sum i is achievable.",
    solution: `class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int total = accumulate(nums.begin(), nums.end(), 0);
        if (total % 2 != 0) return false;
        
        int target = total / 2;
        vector<bool> dp(target + 1, false);
        dp[0] = true;
        
        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        
        return dp[target];
    }
};`,
    notes: "Time: O(n * target), Space: O(target)",
    comments: [
      {
        author: "SubsetSumExpert",
        content: "Classic subset sum DP! Iterates backwards to avoid reuse.",
      },
      {
        author: "CodeReviewer42",
        content: "Good early return if total is odd.",
      },
      {
        author: "OptimizationExpert",
        content: "Iterating backwards ensures each number is used at most once.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use bitset for more efficient implementation."
      }
    ]
  },

  {
    problemName: "Target Sum",
    author: "DP Expression Evaluator",
    explanation: "Convert to subset sum: find subset with sum = (target + total) / 2. Then count number of such subsets.",
    solution: `class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int target) {
        int total = accumulate(nums.begin(), nums.end(), 0);
        if (abs(target) > total) return 0;
        
        int newTarget = (target + total);
        if (newTarget % 2 != 0) return 0;
        
        newTarget /= 2;
        vector<int> dp(newTarget + 1, 0);
        dp[0] = 1;
        
        for (int num : nums) {
            for (int i = newTarget; i >= num; i--) {
                dp[i] += dp[i - num];
            }
        }
        
        return dp[newTarget];
    }
};`,
    notes: "Time: O(n * target), Space: O(target)",
    comments: [
      {
        author: "DPExpert",
        content: "Clever reduction to subset sum! + and - signs become subset selection.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of edge cases and integer division.",
      },
      {
        author: "OptimizationExpert",
        content: "Much more efficient than DFS which would be O(2^n).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS with memoization but DP is better."
      }
    ]
  },

  {
    problemName: "Decode Ways",
    author: "DP String Decoder",
    explanation: "DP where dp[i] = ways to decode first i characters. Consider single digit (1-9) and two digits (10-26).",
    solution: `class Solution {
public:
    int numDecodings(string s) {
        int n = s.length();
        if (n == 0 || s[0] == '0') return 0;
        
        vector<int> dp(n + 1, 0);
        dp[0] = 1;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            // Single digit
            if (s[i-1] != '0') {
                dp[i] += dp[i-1];
            }
            
            // Two digits
            int twoDigit = stoi(s.substr(i-2, 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                dp[i] += dp[i-2];
            }
        }
        
        return dp[n];
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StringDPExpert",
        content: "Classic decoding DP! Handles single and double digit cases.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of '0' which cannot be used alone.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize to O(1) space with two variables.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS with memoization but DP is more efficient."
      }
    ]
  },

  {
    problemName: "Perfect Squares",
    author: "DP Number Theorist",
    explanation: "DP where dp[i] = min perfect squares that sum to i. For each i, try all j where j² <= i: dp[i] = min(dp[i], 1 + dp[i - j²]).",
    solution: `class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                dp[i] = min(dp[i], 1 + dp[i - j * j]);
            }
        }
        
        return dp[n];
    }
};`,
    notes: "Time: O(n √n), Space: O(n)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic perfect squares DP! Tries all possible square numbers.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean initialization with INT_MAX and dp[0] = 0.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS for potentially better performance.",
      },
      {
        author: "AlternativeThinker",
        content: "Lagrange's four-square theorem says answer is at most 4."
      }
    ]
  },

  {
    problemName: "Coin Change II",
    author: "DP Counter",
    explanation: "DP where dp[i] = number of combinations to make amount i. For each coin, update dp: dp[i] += dp[i - coin].",
    solution: `class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1;
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }
        
        return dp[amount];
    }
};`,
    notes: "Time: O(amount * n), Space: O(amount)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic unbounded knapsack counting! Iterates forwards for unlimited coins.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation. Note the order: coins outer loop, amount inner loop.",
      },
      {
        author: "OptimizationExpert",
        content: "Iterating forwards allows multiple uses of same coin.",
      },
      {
        author: "AlternativeThinker",
        content: "If we iterate backwards, it becomes 0/1 knapsack."
      }
    ]
  },

  {
    problemName: "Unique Paths II",
    author: "DP Grid Traverser",
    explanation: "Similar to unique paths but with obstacles. If cell is obstacle, dp[i][j] = 0. Otherwise dp[i][j] = dp[i-1][j] + dp[i][j-1].",
    solution: `class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        int m = obstacleGrid.size(), n = obstacleGrid[0].size();
        vector<vector<long>> dp(m, vector<long>(n, 0));
        
        // Initialize first cell
        if (obstacleGrid[0][0] == 0) {
            dp[0][0] = 1;
        }
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (obstacleGrid[i][j] == 1) {
                    dp[i][j] = 0;
                    continue;
                }
                if (i > 0) dp[i][j] += dp[i-1][j];
                if (j > 0) dp[i][j] += dp[i][j-1];
            }
        }
        
        return dp[m-1][n-1];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "DPExpert",
        content: "Grid DP with obstacles! Handles blocked cells correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of long to avoid integer overflow.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize to O(n) space by reusing single row.",
      },
      {
        author: "AlternativeThinker",
        content: "We could modify obstacleGrid in-place to save space."
      }
    ]
  },

  // Hard (10)
  {
    problemName: "Best Time to Buy and Sell Stock III",
    author: "DP Transaction Expert",
    explanation: "Use state machine: bought1, sold1, bought2, sold2. Track maximum profit after each transaction.",
    solution: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int bought1 = INT_MIN, sold1 = 0;
        int bought2 = INT_MIN, sold2 = 0;
        
        for (int price : prices) {
            bought1 = max(bought1, -price);
            sold1 = max(sold1, bought1 + price);
            bought2 = max(bought2, sold1 - price);
            sold2 = max(sold2, bought2 + price);
        }
        
        return sold2;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "StockExpert",
        content: "Clever state machine! Tracks two transactions simultaneously.",
      },
      {
        author: "CodeReviewer42",
        content: "Elegant O(1) space solution with four state variables.",
      },
      {
        author: "OptimizationExpert",
        content: "Much better than O(n) space DP approaches.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with k transactions but this is optimal for k=2."
      }
    ]
  },

  {
    problemName: "Best Time to Buy and Sell Stock IV",
    author: "DP Transaction Expert",
    explanation: "Generalized solution for k transactions. Use DP where dp[i][j] = max profit with j transactions by day i.",
    solution: `class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        int n = prices.size();
        if (n == 0 || k == 0) return 0;
        
        if (k >= n / 2) {
            // Unlimited transactions
            int profit = 0;
            for (int i = 1; i < n; i++) {
                if (prices[i] > prices[i-1]) {
                    profit += prices[i] - prices[i-1];
                }
            }
            return profit;
        }
        
        vector<vector<int>> dp(k + 1, vector<int>(n, 0));
        
        for (int t = 1; t <= k; t++) {
            int maxDiff = -prices[0];
            for (int i = 1; i < n; i++) {
                dp[t][i] = max(dp[t][i-1], prices[i] + maxDiff);
                maxDiff = max(maxDiff, dp[t-1][i] - prices[i]);
            }
        }
        
        return dp[k][n-1];
    }
};`,
    notes: "Time: O(k*n), Space: O(k*n)",
    comments: [
      {
        author: "StockExpert",
        content: "Generalized stock trading! Handles unlimited transactions case separately.",
      },
      {
        author: "CodeReviewer42",
        content: "Good optimization for k >= n/2 (unlimited transactions).",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize to O(n) space by reusing arrays.",
      },
      {
        author: "AlternativeThinker",
        content: "State machine approach also works but this is more standard."
      }
    ]
  },

  {
    problemName: "Maximum Profit in Job Scheduling",
    author: "DP Scheduler",
    explanation: "Sort jobs by end time. Use binary search to find last non-conflicting job. DP: dp[i] = max(profit[i] + dp[prev], dp[i-1]).",
    solution: `class Solution {
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int n = startTime.size();
        vector<vector<int>> jobs;
        for (int i = 0; i < n; i++) {
            jobs.push_back({endTime[i], startTime[i], profit[i]});
        }
        sort(jobs.begin(), jobs.end());
        
        vector<int> dp(n);
        dp[0] = jobs[0][2];
        
        for (int i = 1; i < n; i++) {
            int currentProfit = jobs[i][2];
            
            // Find last non-conflicting job using binary search
            int left = 0, right = i - 1;
            while (left <= right) {
                int mid = (left + right) / 2;
                if (jobs[mid][0] <= jobs[i][1]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
            if (right >= 0) {
                currentProfit += dp[right];
            }
            
            dp[i] = max(dp[i-1], currentProfit);
        }
        
        return dp[n-1];
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "SchedulingExpert",
        content: "Weighted interval scheduling! Classic DP with binary search.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of binary search to find non-conflicting jobs.",
      },
      {
        author: "OptimizationExpert",
        content: "O(n log n) due to sorting and binary searches.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use coordinate compression and Fenwick tree."
      }
    ]
  },

  {
    problemName: "Russian Doll Envelopes",
    author: "DP Enveloper",
    explanation: "Sort by width ascending, height descending. Then find LIS on heights. This avoids same width envelopes nesting.",
    solution: `class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        // Sort by width ascending, height descending
        sort(envelopes.begin(), envelopes.end(), [](const vector<int>& a, const vector<int>& b) {
            if (a[0] == b[0]) return a[1] > b[1];
            return a[0] < b[0];
        });
        
        // Find LIS on heights
        vector<int> tails;
        for (auto& env : envelopes) {
            int height = env[1];
            auto it = lower_bound(tails.begin(), tails.end(), height);
            if (it == tails.end()) {
                tails.push_back(height);
            } else {
                *it = height;
            }
        }
        
        return tails.size();
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "LISExpert",
        content: "Clever reduction to LIS! Sorting by width ascending, height descending avoids same width nesting.",
      },
      {
        author: "CodeReviewer42",
        content: "Good custom comparator for the special sorting requirement.",
      },
      {
        author: "OptimizationExpert",
        content: "O(n log n) instead of O(n²) 2D DP.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use 2D DP but that would be O(n²)."
      }
    ]
  },

  {
    problemName: "Dungeon Game",
    author: "DP Pathfinder",
    explanation: "Start from bottom-right. DP[i][j] = min health needed to reach princess from (i,j). dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j]).",
    solution: `class Solution {
public:
    int calculateMinimumHP(vector<vector<int>>& dungeon) {
        int m = dungeon.size(), n = dungeon[0].size();
        vector<vector<int>> dp(m, vector<int>(n, 0));
        
        // Bottom-right corner
        dp[m-1][n-1] = max(1, 1 - dungeon[m-1][n-1]);
        
        // Last row
        for (int j = n-2; j >= 0; j--) {
            dp[m-1][j] = max(1, dp[m-1][j+1] - dungeon[m-1][j]);
        }
        
        // Last column
        for (int i = m-2; i >= 0; i--) {
            dp[i][n-1] = max(1, dp[i+1][n-1] - dungeon[i][n-1]);
        }
        
        // Fill rest of the table
        for (int i = m-2; i >= 0; i--) {
            for (int j = n-2; j >= 0; j--) {
                int minHealth = min(dp[i+1][j], dp[i][j+1]);
                dp[i][j] = max(1, minHealth - dungeon[i][j]);
            }
        }
        
        return dp[0][0];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "DPExpert",
        content: "Reverse DP from destination! Ensures knight never dies.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of max(1, ...) to ensure minimum health of 1.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize to O(n) space by reusing single row.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Dijkstra but DP is more efficient."
      }
    ]
  },

  {
    problemName: "Burst Balloons",
    author: "DP Interval Expert",
    explanation: "DP where dp[i][j] = max coins from bursting balloons i..j. Try each k as last balloon: dp[i][j] = max(dp[i][k-1] + nums[i-1]*nums[k]*nums[j+1] + dp[k+1][j]).",
    solution: `class Solution {
public:
    int maxCoins(vector<int>& nums) {
        int n = nums.size();
        vector<int> balloons(n + 2, 1);
        for (int i = 0; i < n; i++) {
            balloons[i+1] = nums[i];
        }
        
        vector<vector<int>> dp(n + 2, vector<int>(n + 2, 0));
        
        for (int len = 1; len <= n; len++) {
            for (int i = 1; i <= n - len + 1; i++) {
                int j = i + len - 1;
                for (int k = i; k <= j; k++) {
                    dp[i][j] = max(dp[i][j], 
                                  dp[i][k-1] + 
                                  balloons[i-1] * balloons[k] * balloons[j+1] + 
                                  dp[k+1][j]);
                }
            }
        }
        
        return dp[1][n];
    }
};`,
    notes: "Time: O(n³), Space: O(n²)",
    comments: [
      {
        author: "IntervalDPExpert",
        content: "Classic interval DP! Considers each balloon as last to burst.",
      },
      {
        author: "CodeReviewer42",
        content: "Good padding with 1s at boundaries for edge cases.",
      },
      {
        author: "OptimizationExpert",
        content: "O(n³) is optimal for this problem.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use memoized DFS but iterative DP is cleaner."
      }
    ]
  },

  {
    problemName: "Palindrome Partitioning II",
    author: "DP Partitioner",
    explanation: "Use two DPs: isPal[i][j] = whether s[i..j] is palindrome, and dp[i] = min cuts for s[0..i-1].",
    solution: `class Solution {
public:
    int minCut(string s) {
        int n = s.length();
        vector<vector<bool>> isPal(n, vector<bool>(n, false));
        vector<int> dp(n, 0);
        
        for (int i = 0; i < n; i++) {
            int minCuts = i; // max cuts for length i+1 is i
            for (int j = 0; j <= i; j++) {
                if (s[j] == s[i] && (i - j <= 1 || isPal[j+1][i-1])) {
                    isPal[j][i] = true;
                    minCuts = (j == 0) ? 0 : min(minCuts, dp[j-1] + 1);
                }
            }
            dp[i] = minCuts;
        }
        
        return dp[n-1];
    }
};`,
    notes: "Time: O(n²), Space: O(n²)",
    comments: [
      {
        author: "StringDPExpert",
        content: "Clever combined DP! Builds palindrome table and min cuts simultaneously.",
      },
      {
        author: "CodeReviewer42",
        content: "Good palindrome check: s[j]==s[i] and inner substring is palindrome.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize space by building palindrome table on the fly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use two separate passes but this is more efficient."
      }
    ]
  },

  // ===== GRAPH SOLUTIONS =====
  
  // Easy (8)
  {
    problemName: "Number of Islands",
    author: "DFS Explorer",
    explanation: "Use DFS to mark connected land cells. For each unvisited '1', do DFS and increment count.",
    solution: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        if (grid.empty()) return 0;
        
        int m = grid.size(), n = grid[0].size();
        int count = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    dfs(grid, i, j);
                    count++;
                }
            }
        }
        
        return count;
    }
    
private:
    void dfs(vector<vector<char>>& grid, int i, int j) {
        int m = grid.size(), n = grid[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != '1') {
            return;
        }
        
        grid[i][j] = '0'; // mark as visited
        
        // Explore all four directions
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n) for recursion stack",
    comments: [
      {
        author: "DFSExpert",
        content: "Classic connected components DFS! Marks visited cells in-place.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean DFS implementation with bounds checking.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS with queue for O(min(m,n)) space.",
      },
      {
        author: "AlternativeThinker",
        content: "Union-Find is also possible but DFS is more intuitive."
      }
    ]
  },

  {
    problemName: "Flood Fill",
    author: "DFS Painter",
    explanation: "Use DFS to change all connected pixels of original color to new color. Similar to number of islands.",
    solution: `class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        int oldColor = image[sr][sc];
        if (oldColor != newColor) {
            dfs(image, sr, sc, oldColor, newColor);
        }
        return image;
    }
    
private:
    void dfs(vector<vector<int>>& image, int i, int j, int oldColor, int newColor) {
        int m = image.size(), n = image[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
            return;
        }
        
        image[i][j] = newColor;
        
        dfs(image, i + 1, j, oldColor, newColor);
        dfs(image, i - 1, j, oldColor, newColor);
        dfs(image, i, j + 1, oldColor, newColor);
        dfs(image, i, j - 1, oldColor, newColor);
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n) for recursion stack",
    comments: [
      {
        author: "DFSExpert",
        content: "Classic flood fill algorithm! Similar to paint bucket tool.",
      },
      {
        author: "CodeReviewer42",
        content: "Good check to avoid infinite recursion when oldColor == newColor.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS for more control over memory usage.",
      },
      {
        author: "AlternativeThinker",
        content: "Iterative DFS with stack would avoid recursion limits."
      }
    ]
  },

  {
    problemName: "Find the Town Judge",
    author: "Graph Degree Counter",
    explanation: "The judge is trusted by n-1 people and trusts nobody. Track in-degree (trust count) and out-degree (trusts others).",
    solution: `class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        vector<int> inDegree(n + 1, 0);
        vector<int> outDegree(n + 1, 0);
        
        for (auto& t : trust) {
            outDegree[t[0]]++;
            inDegree[t[1]]++;
        }
        
        for (int i = 1; i <= n; i++) {
            if (inDegree[i] == n - 1 && outDegree[i] == 0) {
                return i;
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(n + t), Space: O(n)",
    comments: [
      {
        author: "GraphExpert",
        content: "Clever degree counting! Judge has in-degree n-1 and out-degree 0.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with two degree arrays.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use single array: inDegree - outDegree.",
      },
      {
        author: "AlternativeThinker",
        content: "We could track net trust but two arrays are clearer."
      }
    ]
  },

  {
    problemName: "Find Center of Star Graph",
    author: "Star Finder",
    explanation: "The center appears in every edge. Just check first two edges to find common node.",
    solution: `class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        // The center node appears in both first and second edge
        if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
            return edges[0][0];
        }
        return edges[0][1];
    }
};`,
    notes: "Time: O(1), Space: O(1)",
    comments: [
      {
        author: "GraphExpert",
        content: "Elegant O(1) solution! Center appears in all edges.",
      },
      {
        author: "CodeReviewer42",
        content: "Simple check using first two edges.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal solution. No need to process all edges.",
      },
      {
        author: "AlternativeThinker",
        content: "We could count degrees but this is simpler."
      }
    ]
  },

  {
    problemName: "Island Perimeter",
    author: "Perimeter Calculator",
    explanation: "For each land cell, add 4 to perimeter. For each adjacent land cell, subtract 2 (shared edge).",
    solution: `class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        int perimeter = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    perimeter += 4;
                    
                    // Check left neighbor
                    if (j > 0 && grid[i][j-1] == 1) {
                        perimeter -= 2;
                    }
                    
                    // Check top neighbor
                    if (i > 0 && grid[i-1][j] == 1) {
                        perimeter -= 2;
                    }
                }
            }
        }
        
        return perimeter;
    }
};`,
    notes: "Time: O(m*n), Space: O(1)",
    comments: [
      {
        author: "GridExpert",
        content: "Clever counting approach! Adds 4 per land cell, subtracts 2 per shared edge.",
      },
      {
        author: "CodeReviewer42",
        content: "Only checks left and top to avoid double counting.",
      },
      {
        author: "OptimizationExpert",
        content: "More efficient than DFS/BFS approaches.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS and count boundaries but this is simpler."
      }
    ]
  },

  {
    problemName: "Max Area of Island",
    author: "DFS Area Calculator",
    explanation: "Use DFS to explore each island. Track maximum area encountered.",
    solution: `class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    maxArea = max(maxArea, dfs(grid, i, j));
                }
            }
        }
        
        return maxArea;
    }
    
private:
    int dfs(vector<vector<int>>& grid, int i, int j) {
        int m = grid.size(), n = grid[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 1) {
            return 0;
        }
        
        grid[i][j] = 0; // mark as visited
        
        return 1 + dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + 
               dfs(grid, i, j + 1) + dfs(grid, i, j - 1);
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n) for recursion stack",
    comments: [
      {
        author: "DFSExpert",
        content: "Classic connected components with area tracking!",
      },
      {
        author: "CodeReviewer42",
        content: "Clean DFS that returns area of current island.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS with queue for O(min(m,n)) space.",
      },
      {
        author: "AlternativeThinker",
        content: "Union-Find with size tracking is also possible."
      }
    ]
  },

  {
    problemName: "Employee Importance",
    author: "DFS Importance Calculator",
    explanation: "Use DFS to sum importance of employee and all subordinates.",
    solution: `/*
// Definition for Employee.
class Employee {
public:
    int id;
    int importance;
    vector<int> subordinates;
};
*/
class Solution {
public:
    int getImportance(vector<Employee*> employees, int id) {
        unordered_map<int, Employee*> empMap;
        for (Employee* emp : employees) {
            empMap[emp->id] = emp;
        }
        return dfs(id, empMap);
    }
    
private:
    int dfs(int id, unordered_map<int, Employee*>& empMap) {
        Employee* emp = empMap[id];
        int total = emp->importance;
        for (int subId : emp->subordinates) {
            total += dfs(subId, empMap);
        }
        return total;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "DFSExpert",
        content: "Tree DFS on employee hierarchy! Sums importance recursively.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of hash map for O(1) employee lookup.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS with queue for iterative solution.",
      },
      {
        author: "AlternativeThinker",
        content: "We could precompute all importances but DFS is simpler."
      }
    ]
  },

  {
    problemName: "Keys and Rooms",
    author: "DFS Room Explorer",
    explanation: "Use DFS to visit all reachable rooms. Check if all rooms are visited.",
    solution: `class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<bool> visited(n, false);
        dfs(0, rooms, visited);
        
        for (bool v : visited) {
            if (!v) return false;
        }
        return true;
    }
    
private:
    void dfs(int room, vector<vector<int>>& rooms, vector<bool>& visited) {
        if (visited[room]) return;
        
        visited[room] = true;
        for (int key : rooms[room]) {
            dfs(key, rooms, visited);
        }
    }
};`,
    notes: "Time: O(n + k) where k is total keys, Space: O(n)",
    comments: [
      {
        author: "DFSExpert",
        content: "Classic graph connectivity! Checks if all rooms are reachable from room 0.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean DFS implementation with visited array.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS with queue for iterative solution.",
      },
      {
        author: "AlternativeThinker",
        content: "Union-Find would be overkill for this problem."
      }
    ]
  },

  // Medium (15)
  {
    problemName: "Clone Graph",
    author: "DFS Cloner",
    explanation: "Use DFS with hash map to map original nodes to cloned nodes. Create clones recursively.",
    solution: `/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/
class Solution {
public:
    Node* cloneGraph(Node* node) {
        if (node == nullptr) return nullptr;
        unordered_map<Node*, Node*> visited;
        return dfs(node, visited);
    }
    
private:
    Node* dfs(Node* node, unordered_map<Node*, Node*>& visited) {
        if (visited.count(node)) {
            return visited[node];
        }
        
        Node* clone = new Node(node->val);
        visited[node] = clone;
        
        for (Node* neighbor : node->neighbors) {
            clone->neighbors.push_back(dfs(neighbor, visited));
        }
        
        return clone;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "GraphExpert",
        content: "Classic graph cloning! Uses DFS with visited map to avoid cycles.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive DFS that creates clones and connects neighbors.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS with queue for iterative solution.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative DFS with stack."
      }
    ]
  },

  {
    problemName: "Course Schedule",
    author: "Cycle Detector",
    explanation: "Use topological sort (Kahn's algorithm) or DFS cycle detection. Check if graph is DAG.",
    solution: `class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        vector<int> inDegree(numCourses, 0);
        
        // Build graph and compute in-degrees
        for (auto& pre : prerequisites) {
            graph[pre[1]].push_back(pre[0]);
            inDegree[pre[0]]++;
        }
        
        // Kahn's algorithm for topological sort
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                q.push(i);
            }
        }
        
        int count = 0;
        while (!q.empty()) {
            int course = q.front();
            q.pop();
            count++;
            
            for (int neighbor : graph[course]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        return count == numCourses;
    }
};`,
    notes: "Time: O(n + e), Space: O(n + e)",
    comments: [
      {
        author: "TopologicalSortExpert",
        content: "Kahn's algorithm! Detects cycles by counting processed nodes.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with in-degree counting.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use DFS with state coloring for cycle detection.",
      },
      {
        author: "AlternativeThinker",
        content: "DFS approach might be more intuitive for some."
      }
    ]
  },

  {
    problemName: "Pacific Atlantic Water Flow",
    author: "BFS from Oceans",
    explanation: "Start BFS from Pacific and Atlantic edges separately. Find cells reachable from both oceans.",
    solution: `class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        if (heights.empty()) return {};
        
        int m = heights.size(), n = heights[0].size();
        vector<vector<bool>> pacific(m, vector<bool>(n, false));
        vector<vector<bool>> atlantic(m, vector<bool>(n, false));
        
        // BFS from Pacific (left and top edges)
        queue<pair<int, int>> q;
        for (int i = 0; i < m; i++) {
            q.push({i, 0});
            pacific[i][0] = true;
        }
        for (int j = 0; j < n; j++) {
            q.push({0, j});
            pacific[0][j] = true;
        }
        bfs(heights, q, pacific);
        
        // BFS from Atlantic (right and bottom edges)
        q = queue<pair<int, int>>();
        for (int i = 0; i < m; i++) {
            q.push({i, n-1});
            atlantic[i][n-1] = true;
        }
        for (int j = 0; j < n; j++) {
            q.push({m-1, j});
            atlantic[m-1][j] = true;
        }
        bfs(heights, q, atlantic);
        
        // Find cells reachable from both oceans
        vector<vector<int>> result;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.push_back({i, j});
                }
            }
        }
        
        return result;
    }
    
private:
    void bfs(vector<vector<int>>& heights, queue<pair<int, int>>& q, vector<vector<bool>>& visited) {
        int m = heights.size(), n = heights[0].size();
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto [i, j] = q.front();
            q.pop();
            
            for (auto& dir : directions) {
                int ni = i + dir[0], nj = j + dir[1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && 
                    !visited[ni][nj] && heights[ni][nj] >= heights[i][j]) {
                    visited[ni][nj] = true;
                    q.push({ni, nj});
                }
            }
        }
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "BFSExpert",
        content: "Clever multi-source BFS! Starts from ocean edges and flows uphill.",
      },
      {
        author: "CodeReviewer42",
        content: "Good separation of Pacific and Atlantic BFS.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use DFS but BFS is more natural for this problem.",
      },
      {
        author: "AlternativeThinker",
        content: "We could do single pass with different markers."
      }
    ]
  },

  {
    problemName: "Word Ladder",
    author: "BFS Word Transformer",
    explanation: "Use BFS to find shortest transformation sequence. Try all possible one-character changes.",
    solution: `class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> wordSet(wordList.begin(), wordList.end());
        if (!wordSet.count(endWord)) return 0;
        
        queue<string> q;
        q.push(beginWord);
        int level = 1;
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                string current = q.front();
                q.pop();
                
                if (current == endWord) {
                    return level;
                }
                
                // Try all possible one-character changes
                for (int j = 0; j < current.length(); j++) {
                    char original = current[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        current[j] = c;
                        if (wordSet.count(current)) {
                            q.push(current);
                            wordSet.erase(current); // mark as visited
                        }
                    }
                    current[j] = original;
                }
            }
            level++;
        }
        
        return 0;
    }
};`,
    notes: "Time: O(n * L²) where L is word length, Space: O(n)",
    comments: [
      {
        author: "BFSExpert",
        content: "Classic word ladder BFS! Finds shortest transformation path.",
      },
      {
        author: "CodeReviewer42",
        content: "Good optimization: remove visited words from set.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use bidirectional BFS for better performance.",
      },
      {
        author: "AlternativeThinker",
        content: "We could precompute all transformations but that would use more memory."
      }
    ]
  },

  {
    problemName: "Graph Valid Tree",
    author: "Tree Validator",
    explanation: "A valid tree has exactly n-1 edges and is connected. Use DFS/BFS to check connectivity and cycle detection.",
    solution: `class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        if (edges.size() != n - 1) return false;
        
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        
        vector<bool> visited(n, false);
        if (hasCycle(0, -1, graph, visited)) {
            return false;
        }
        
        // Check if all nodes are visited (connected)
        for (bool v : visited) {
            if (!v) return false;
        }
        
        return true;
    }
    
private:
    bool hasCycle(int node, int parent, vector<vector<int>>& graph, vector<bool>& visited) {
        if (visited[node]) return true;
        
        visited[node] = true;
        for (int neighbor : graph[node]) {
            if (neighbor != parent && hasCycle(neighbor, node, graph, visited)) {
                return true;
            }
        }
        return false;
    }
};`,
    notes: "Time: O(n + e), Space: O(n + e)",
    comments: [
      {
        author: "GraphExpert",
        content: "Tree validation: n-1 edges, connected, no cycles. Uses DFS cycle detection.",
      },
      {
        author: "CodeReviewer42",
        content: "Good cycle detection with parent tracking.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use Union-Find for O(n) time and space.",
      },
      {
        author: "AlternativeThinker",
        content: "Union-Find is more efficient for this problem."
      }
    ]
  },

  {
    problemName: "Number of Connected Components in an Undirected Graph",
    author: "Component Counter",
    explanation: "Use DFS/BFS to count connected components. Each unvisited node starts a new component.",
    solution: `class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        
        vector<bool> visited(n, false);
        int count = 0;
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i, graph, visited);
                count++;
            }
        }
        
        return count;
    }
    
private:
    void dfs(int node, vector<vector<int>>& graph, vector<bool>& visited) {
        if (visited[node]) return;
        
        visited[node] = true;
        for (int neighbor : graph[node]) {
            dfs(neighbor, graph, visited);
        }
    }
};`,
    notes: "Time: O(n + e), Space: O(n + e)",
    comments: [
      {
        author: "GraphExpert",
        content: "Classic connected components counting! Uses DFS to mark connected nodes.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean DFS implementation with visited array.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use Union-Find for potentially better performance.",
      },
      {
        author: "AlternativeThinker",
        content: "BFS with queue would work equally well."
      }
    ]
  },

  {
    problemName: "Course Schedule II",
    author: "Topological Sorter",
    explanation: "Use Kahn's algorithm for topological sort. Return order of courses.",
    solution: `class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        vector<int> inDegree(numCourses, 0);
        
        // Build graph and compute in-degrees
        for (auto& pre : prerequisites) {
            graph[pre[1]].push_back(pre[0]);
            inDegree[pre[0]]++;
        }
        
        // Kahn's algorithm
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                q.push(i);
            }
        }
        
        vector<int> order;
        while (!q.empty()) {
            int course = q.front();
            q.pop();
            order.push_back(course);
            
            for (int neighbor : graph[course]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        if (order.size() == numCourses) {
            return order;
        }
        return {};
    }
};`,
    notes: "Time: O(n + e), Space: O(n + e)",
    comments: [
      {
        author: "TopologicalSortExpert",
        content: "Kahn's algorithm for topological order! Returns course sequence.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with in-degree counting.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use DFS with post-order traversal.",
      },
      {
        author: "AlternativeThinker",
        content: "DFS approach might be more intuitive for some."
      }
    ]
  },

  {
    problemName: "Alien Dictionary",
    author: "Topological Sorter",
    explanation: "Build graph from adjacent words' character differences. Then topological sort to find order.",
    solution: `class Solution {
public:
    string alienOrder(vector<string>& words) {
        unordered_map<char, unordered_set<char>> graph;
        unordered_map<char, int> inDegree;
        
        // Initialize all characters
        for (string& word : words) {
            for (char c : word) {
                inDegree[c] = 0;
            }
        }
        
        // Build graph from adjacent words
        for (int i = 0; i < words.size() - 1; i++) {
            string& word1 = words[i];
            string& word2 = words[i + 1];
            
            // Check for invalid case: word2 is prefix of word1
            if (word1.length() > word2.length() && word1.substr(0, word2.length()) == word2) {
                return "";
            }
            
            int len = min(word1.length(), word2.length());
            for (int j = 0; j < len; j++) {
                if (word1[j] != word2[j]) {
                    if (!graph[word1[j]].count(word2[j])) {
                        graph[word1[j]].insert(word2[j]);
                        inDegree[word2[j]]++;
                    }
                    break;
                }
            }
        }
        
        // Kahn's algorithm
        queue<char> q;
        for (auto& [c, degree] : inDegree) {
            if (degree == 0) {
                q.push(c);
            }
        }
        
        string result;
        while (!q.empty()) {
            char c = q.front();
            q.pop();
            result += c;
            
            for (char neighbor : graph[c]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        // Check if all characters are included
        if (result.length() == inDegree.size()) {
            return result;
        }
        return "";
    }
};`,
    notes: "Time: O(n * L) where L is max word length, Space: O(1) since 26 letters",
    comments: [
      {
        author: "TopologicalSortExpert",
        content: "Complex graph building from word comparisons! Uses topological sort for character order.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of invalid cases like 'abc' before 'ab'.",
      },
      {
        author: "OptimizationExpert",
        content: "We only have 26 letters, so complexity is effectively O(n).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS with state coloring for cycle detection."
      }
    ]
  },

  {
    problemName: "Cheapest Flights Within K Stops",
    author: "BFS Price Finder",
    explanation: "Use BFS with price tracking. For each stop level, track minimum price to reach each city.",
    solution: `class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        // Build graph: city -> {neighbor, price}
        vector<vector<pair<int, int>>> graph(n);
        for (auto& flight : flights) {
            graph[flight[0]].push_back({flight[1], flight[2]});
        }
        
        // BFS with stops constraint
        vector<int> prices(n, INT_MAX);
        prices[src] = 0;
        
        queue<pair<int, int>> q; // {city, current_price}
        q.push({src, 0});
        int stops = 0;
        
        while (!q.empty() && stops <= k) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                auto [city, currentPrice] = q.front();
                q.pop();
                
                for (auto& [neighbor, price] : graph[city]) {
                    int newPrice = currentPrice + price;
                    if (newPrice < prices[neighbor]) {
                        prices[neighbor] = newPrice;
                        q.push({neighbor, newPrice});
                    }
                }
            }
            stops++;
        }
        
        return prices[dst] == INT_MAX ? -1 : prices[dst];
    }
};`,
    notes: "Time: O(n + e * k), Space: O(n)",
    comments: [
      {
        author: "BFSExpert",
        content: "BFS with stops constraint! Tracks minimum prices at each stop level.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of level-by-level BFS to track stops.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use Dijkstra with stop tracking for better performance.",
      },
      {
        author: "AlternativeThinker",
        content: "Bellman-Ford would also work for this problem."
      }
    ]
  },

  {
    problemName: "Network Delay Time",
    author: "Dijkstra Expert",
    explanation: "Use Dijkstra's algorithm to find shortest path from source to all nodes. Return max distance.",
    solution: `class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        // Build graph: node -> {neighbor, time}
        vector<vector<pair<int, int>>> graph(n + 1);
        for (auto& time : times) {
            graph[time[0]].push_back({time[1], time[2]});
        }
        
        // Dijkstra's algorithm
        vector<int> dist(n + 1, INT_MAX);
        dist[k] = 0;
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        pq.push({0, k});
        
        while (!pq.empty()) {
            auto [currentDist, node] = pq.top();
            pq.pop();
            
            if (currentDist > dist[node]) continue;
            
            for (auto& [neighbor, time] : graph[node]) {
                int newDist = currentDist + time;
                if (newDist < dist[neighbor]) {
                    dist[neighbor] = newDist;
                    pq.push({newDist, neighbor});
                }
            }
        }
        
        // Find maximum distance
        int maxTime = 0;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == INT_MAX) return -1;
            maxTime = max(maxTime, dist[i]);
        }
        
        return maxTime;
    }
};`,
    notes: "Time: O(n log n + e), Space: O(n + e)",
    comments: [
      {
        author: "DijkstraExpert",
        content: "Classic Dijkstra's algorithm! Finds shortest paths from source.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with min-heap.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal for non-negative weights.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Bellman-Ford but Dijkstra is more efficient."
      }
    ]
  },

  {
    problemName: "Shortest Path in Binary Matrix",
    author: "BFS Pathfinder",
    explanation: "Use BFS to find shortest path in binary matrix. 8-direction movement allowed.",
    solution: `class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        if (grid[0][0] == 1 || grid[n-1][n-1] == 1) return -1;
        
        vector<vector<int>> directions = {
            {-1,-1}, {-1,0}, {-1,1},
            {0,-1},           {0,1},
            {1,-1},  {1,0},  {1,1}
        };
        
        queue<vector<int>> q; // {row, col, distance}
        q.push({0, 0, 1});
        grid[0][0] = 1; // mark as visited
        
        while (!q.empty()) {
            auto cell = q.front();
            q.pop();
            int row = cell[0], col = cell[1], dist = cell[2];
            
            if (row == n-1 && col == n-1) {
                return dist;
            }
            
            for (auto& dir : directions) {
                int newRow = row + dir[0], newCol = col + dir[1];
                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid[newRow][newCol] == 0) {
                    q.push({newRow, newCol, dist + 1});
                    grid[newRow][newCol] = 1; // mark as visited
                }
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(n²), Space: O(n²)",
    comments: [
      {
        author: "BFSExpert",
        content: "BFS for shortest path in grid! 8-direction movement.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with 8 directions.",
      },
      {
        author: "OptimizationExpert",
        content: "BFS guarantees shortest path for unweighted grid.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use A* with heuristic but BFS is simpler."
      }
    ]
  },

  {
    problemName: "Rotting Oranges",
    author: "BFS Rot Spreader",
    explanation: "Multi-source BFS from all rotten oranges. Track time to rot all fresh oranges.",
    solution: `class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        queue<pair<int, int>> q;
        int fresh = 0;
        
        // Count fresh oranges and add rotten ones to queue
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    q.push({i, j});
                } else if (grid[i][j] == 1) {
                    fresh++;
                }
            }
        }
        
        if (fresh == 0) return 0;
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        int minutes = 0;
        
        while (!q.empty()) {
            int levelSize = q.size();
            bool infected = false;
            
            for (int i = 0; i < levelSize; i++) {
                auto [row, col] = q.front();
                q.pop();
                
                for (auto& dir : directions) {
                    int newRow = row + dir[0], newCol = col + dir[1];
                    if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] == 1) {
                        grid[newRow][newCol] = 2;
                        q.push({newRow, newCol});
                        fresh--;
                        infected = true;
                    }
                }
            }
            
            if (infected) minutes++;
        }
        
        return fresh == 0 ? minutes : -1;
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "BFSExpert",
        content: "Multi-source BFS! Spreads rot from all rotten oranges simultaneously.",
      },
      {
        author: "CodeReviewer42",
        content: "Good tracking of fresh count and infection progress.",
      },
      {
        author: "OptimizationExpert",
        content: "We could track time without level counting but this is clearer.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS but BFS is more natural for spreading."
      }
    ]
  },

  {
    problemName: "Walls and Gates",
    author: "BFS Distance Calculator",
    explanation: "Multi-source BFS from all gates. Update rooms with shortest distance to nearest gate.",
    solution: `class Solution {
public:
    void wallsAndGates(vector<vector<int>>& rooms) {
        if (rooms.empty()) return;
        
        int m = rooms.size(), n = rooms[0].size();
        queue<pair<int, int>> q;
        
        // Add all gates to queue
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (rooms[i][j] == 0) {
                    q.push({i, j});
                }
            }
        }
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto [row, col] = q.front();
            q.pop();
            
            for (auto& dir : directions) {
                int newRow = row + dir[0], newCol = col + dir[1];
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && 
                    rooms[newRow][newCol] == INT_MAX) {
                    rooms[newRow][newCol] = rooms[row][col] + 1;
                    q.push({newRow, newCol});
                }
            }
        }
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "BFSExpert",
        content: "Multi-source BFS from gates! Updates room distances efficiently.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation that modifies rooms in-place.",
      },
      {
        author: "OptimizationExpert",
        content: "BFS guarantees shortest distances for unweighted grid.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS but it would be less efficient."
      }
    ]
  },

  {
    problemName: "Surrounded Regions",
    author: "DFS Region Capturer",
    explanation: "Start DFS from border 'O's to mark unsurrounded regions. Then capture surrounded regions.",
    solution: `class Solution {
public:
    void solve(vector<vector<char>>& board) {
        if (board.empty()) return;
        
        int m = board.size(), n = board[0].size();
        
        // Mark unsurrounded regions starting from borders
        for (int i = 0; i < m; i++) {
            if (board[i][0] == 'O') dfs(board, i, 0);
            if (board[i][n-1] == 'O') dfs(board, i, n-1);
        }
        for (int j = 0; j < n; j++) {
            if (board[0][j] == 'O') dfs(board, 0, j);
            if (board[m-1][j] == 'O') dfs(board, m-1, j);
        }
        
        // Capture surrounded regions and restore unsurrounded
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                } else if (board[i][j] == 'T') {
                    board[i][j] = 'O';
                }
            }
        }
    }
    
private:
    void dfs(vector<vector<char>>& board, int i, int j) {
        int m = board.size(), n = board[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != 'O') {
            return;
        }
        
        board[i][j] = 'T'; // mark as temporary
        
        dfs(board, i + 1, j);
        dfs(board, i - 1, j);
        dfs(board, i, j + 1);
        dfs(board, i, j - 1);
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n) for recursion stack",
    comments: [
      {
        author: "DFSExpert",
        content: "Clever two-pass approach! Marks unsurrounded regions first, then captures surrounded ones.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of temporary marker 'T' for unsurrounded regions.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use BFS for O(min(m,n)) space.",
      },
      {
        author: "AlternativeThinker",
        content: "Union-Find would also work but DFS is more intuitive."
      }
    ]
  },

  {
    problemName: "Redundant Connection",
    author: "Union-Find Expert",
    explanation: "Use Union-Find to detect cycle. The first edge that connects already connected components is redundant.",
    solution: `class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        int n = edges.size();
        vector<int> parent(n + 1);
        for (int i = 1; i <= n; i++) {
            parent[i] = i;
        }
        
        for (auto& edge : edges) {
            int u = edge[0], v = edge[1];
            if (find(parent, u) == find(parent, v)) {
                return edge;
            }
            unionSets(parent, u, v);
        }
        
        return {};
    }
    
private:
    int find(vector<int>& parent, int x) {
        if (parent[x] != x) {
            parent[x] = find(parent, parent[x]);
        }
        return parent[x];
    }
    
    void unionSets(vector<int>& parent, int x, int y) {
        parent[find(parent, x)] = find(parent, y);
    }
};`,
    notes: "Time: O(n α(n)), Space: O(n)",
    comments: [
      {
        author: "UnionFindExpert",
        content: "Classic Union-Find cycle detection! Returns first edge that creates cycle.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean Union-Find with path compression.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal O(n α(n)) time with Union-Find.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DFS cycle detection but Union-Find is more efficient."
      }
    ]
  },

  // Hard (7)
  {
    problemName: "Word Ladder II",
    author: "BFS Path Finder",
    explanation: "Use BFS to find all shortest transformation paths. Build graph and then use DFS to reconstruct paths.",
    solution: `class Solution {
public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> wordSet(wordList.begin(), wordList.end());
        if (!wordSet.count(endWord)) return {};
        
        // BFS to build graph and find shortest distance
        unordered_map<string, vector<string>> graph;
        unordered_map<string, int> distance;
        queue<string> q;
        
        q.push(beginWord);
        distance[beginWord] = 0;
        
        while (!q.empty()) {
            string current = q.front();
            q.pop();
            
            if (current == endWord) break;
            
            string temp = current;
            for (int i = 0; i < current.length(); i++) {
                char original = temp[i];
                for (char c = 'a'; c <= 'z'; c++) {
                    if (c == original) continue;
                    temp[i] = c;
                    if (wordSet.count(temp)) {
                        if (!distance.count(temp)) {
                            distance[temp] = distance[current] + 1;
                            q.push(temp);
                            graph[current].push_back(temp);
                        } else if (distance[temp] == distance[current] + 1) {
                            graph[current].push_back(temp);
                        }
                    }
                }
                temp[i] = original;
            }
        }
        
        // DFS to find all shortest paths
        vector<vector<string>> result;
        vector<string> path = {beginWord};
        dfs(beginWord, endWord, graph, path, result);
        return result;
    }
    
private:
    void dfs(string current, string endWord, unordered_map<string, vector<string>>& graph, 
             vector<string>& path, vector<vector<string>>& result) {
        if (current == endWord) {
            result.push_back(path);
            return;
        }
        
        for (string& neighbor : graph[current]) {
            path.push_back(neighbor);
            dfs(neighbor, endWord, graph, path, result);
            path.pop_back();
        }
    }
};`,
    notes: "Time: O(n * L² + k) where k is number of paths, Space: O(n)",
    comments: [
      {
        author: "BFSExpert",
        content: "Complex BFS + DFS! Finds all shortest transformation paths.",
      },
      {
        author: "CodeReviewer42",
        content: "Good graph building with distance tracking for shortest paths only.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use bidirectional BFS for better performance.",
      },
      {
        author: "AlternativeThinker",
        content: "We could store paths during BFS but that would use more memory."
      }
    ]
  },

  {
    problemName: "Reconstruct Itinerary",
    author: "DFS Eulerian Path Finder",
    explanation: "Use Hierholzer's algorithm for Eulerian path. DFS with lexical order and backtracking.",
    solution: `class Solution {
public:
    vector<string> findItinerary(vector<vector<string>>& tickets) {
        // Build graph with lexical order
        unordered_map<string, multiset<string>> graph;
        for (auto& ticket : tickets) {
            graph[ticket[0]].insert(ticket[1]);
        }
        
        vector<string> itinerary;
        dfs("JFK", graph, itinerary);
        reverse(itinerary.begin(), itinerary.end());
        return itinerary;
    }
    
private:
    void dfs(string airport, unordered_map<string, multiset<string>>& graph, vector<string>& itinerary) {
        while (!graph[airport].empty()) {
            string next = *graph[airport].begin();
            graph[airport].erase(graph[airport].begin());
            dfs(next, graph, itinerary);
        }
        itinerary.push_back(airport);
    }
};`,
    notes: "Time: O(e log e), Space: O(e)",
    comments: [
      {
        author: "GraphExpert",
        content: "Hierholzer's algorithm for Eulerian path! Uses DFS with multiset for lexical order.",
      },
      {
        author: "CodeReviewer42",
        content: "Clever post-order DFS that builds itinerary backwards.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use iterative DFS with stack.",
      },
      {
        author: "AlternativeThinker",
        content: "We could track used tickets but multiset automatically handles duplicates."
      }
    ]
  },

  {
    problemName: "Minimum Height Trees",
    author: "Topological Trimmer",
    explanation: "Repeatedly remove leaves until 1 or 2 nodes remain. These are the roots of MHTs.",
    solution: `class Solution {
public:
    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
        if (n == 1) return {0};
        
        vector<unordered_set<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].insert(edge[1]);
            graph[edge[1]].insert(edge[0]);
        }
        
        queue<int> leaves;
        for (int i = 0; i < n; i++) {
            if (graph[i].size() == 1) {
                leaves.push(i);
            }
        }
        
        int remaining = n;
        while (remaining > 2) {
            int levelSize = leaves.size();
            remaining -= levelSize;
            
            for (int i = 0; i < levelSize; i++) {
                int leaf = leaves.front();
                leaves.pop();
                
                for (int neighbor : graph[leaf]) {
                    graph[neighbor].erase(leaf);
                    if (graph[neighbor].size() == 1) {
                        leaves.push(neighbor);
                    }
                }
            }
        }
        
        vector<int> result;
        while (!leaves.empty()) {
            result.push_back(leaves.front());
            leaves.pop();
        }
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "GraphExpert",
        content: "Clever topological trimming! Repeatedly removes leaves until center remains.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of unordered_set for efficient neighbor removal.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal O(n) solution instead of O(n²) BFS from each node.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use BFS from leaves but this is more efficient."
      }
    ]
  },

  {
    problemName: "Critical Connections in a Network",
    author: "Tarjan's Algorithm Expert",
    explanation: "Use Tarjan's algorithm to find bridges in the graph. Track discovery time and low link values.",
    solution: `class Solution {
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        // Build graph
        vector<vector<int>> graph(n);
        for (auto& conn : connections) {
            graph[conn[0]].push_back(conn[1]);
            graph[conn[1]].push_back(conn[0]);
        }
        
        vector<int> disc(n, -1), low(n, -1);
        vector<vector<int>> bridges;
        int time = 0;
        
        dfs(0, -1, graph, disc, low, bridges, time);
        return bridges;
    }
    
private:
    void dfs(int u, int parent, vector<vector<int>>& graph, vector<int>& disc, 
             vector<int>& low, vector<vector<int>>& bridges, int& time) {
        disc[u] = low[u] = time++;
        
        for (int v : graph[u]) {
            if (v == parent) continue;
            
            if (disc[v] == -1) {
                dfs(v, u, graph, disc, low, bridges, time);
                low[u] = min(low[u], low[v]);
                
                // If low[v] > disc[u], then u-v is a bridge
                if (low[v] > disc[u]) {
                    bridges.push_back({u, v});
                }
            } else {
                low[u] = min(low[u], disc[v]);
            }
        }
    }
};`,
    notes: "Time: O(n + e), Space: O(n + e)",
    comments: [
      {
        author: "GraphExpert",
        content: "Tarjan's algorithm for bridge finding! Uses discovery time and low link values.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with DFS and time tracking.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal O(n + e) algorithm for bridge detection.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Union-Find but it's less efficient for this problem."
      }
    ]
  },

  {
    problemName: "Swim in Rising Water",
    author: "Binary Search + BFS",
    explanation: "Binary search on possible water levels. For each level, check if path exists using BFS/DFS.",
    solution: `class Solution {
public:
    int swimInWater(vector<vector<int>>& grid) {
        int n = grid.size();
        int left = 0, right = n * n - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (canReach(grid, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canReach(vector<vector<int>>& grid, int waterLevel) {
        int n = grid.size();
        if (grid[0][0] > waterLevel) return false;
        
        vector<vector<bool>> visited(n, vector<bool>(n, false));
        queue<pair<int, int>> q;
        q.push({0, 0});
        visited[0][0] = true;
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto [i, j] = q.front();
            q.pop();
            
            if (i == n-1 && j == n-1) return true;
            
            for (auto& dir : directions) {
                int ni = i + dir[0], nj = j + dir[1];
                if (ni >= 0 && ni < n && nj >= 0 && nj < n && 
                    !visited[ni][nj] && grid[ni][nj] <= waterLevel) {
                    visited[ni][nj] = true;
                    q.push({ni, nj});
                }
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(n² log n²), Space: O(n²)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Binary search + BFS! Finds minimum water level for path existence.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean binary search with BFS path checking.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use Dijkstra for O(n² log n) time.",
      },
      {
        author: "AlternativeThinker",
        content: "Dijkstra might be more efficient for this problem."
      }
    ]
  },

  {
    problemName: "Sliding Puzzle",
    author: "BFS State Explorer",
    explanation: "Treat puzzle as graph where each state is a node. Use BFS to find shortest path to target state.",
    solution: `class Solution {
public:
    int slidingPuzzle(vector<vector<int>>& board) {
        string target = "123450";
        string start = "";
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                start += to_string(board[i][j]);
            }
        }
        
        // Possible moves for each position
        vector<vector<int>> moves = {
            {1, 3},     // position 0
            {0, 2, 4},  // position 1
            {1, 5},     // position 2
            {0, 4},     // position 3
            {1, 3, 5},  // position 4
            {2, 4}      // position 5
        };
        
        unordered_set<string> visited;
        queue<string> q;
        q.push(start);
        visited.insert(start);
        int steps = 0;
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                string current = q.front();
                q.pop();
                
                if (current == target) return steps;
                
                int zeroPos = current.find('0');
                for (int move : moves[zeroPos]) {
                    string next = current;
                    swap(next[zeroPos], next[move]);
                    if (!visited.count(next)) {
                        visited.insert(next);
                        q.push(next);
                    }
                }
            }
            steps++;
        }
        
        return -1;
    }
};`,
    notes: "Time: O(6!)=O(720), Space: O(720)",
    comments: [
      {
        author: "BFSExpert",
        content: "BFS on puzzle states! Treats each board configuration as graph node.",
      },
      {
        author: "CodeReviewer42",
        content: "Good representation of board as string for easy hashing.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use A* with Manhattan distance heuristic.",
      },
      {
        author: "AlternativeThinker",
        content: "We could precompute all possible moves but BFS is sufficient."
      }
    ]
  },

  {
    problemName: "Shortest Path to Get All Keys",
    author: "BFS with State",
    explanation: "BFS with state tracking (keys collected). Each state is (position, keys_bitmask).",
    solution: `class Solution {
public:
    int shortestPathAllKeys(vector<string>& grid) {
        int m = grid.size(), n = grid[0].size();
        int allKeys = 0;
        int startX, startY;
        
        // Find start position and count keys
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '@') {
                    startX = i;
                    startY = j;
                } else if (islower(grid[i][j])) {
                    allKeys |= (1 << (grid[i][j] - 'a'));
                }
            }
        }
        
        // BFS with state: (x, y, keys)
        queue<vector<int>> q; // {x, y, keys, steps}
        q.push({startX, startY, 0, 0});
        
        vector<vector<vector<bool>>> visited(m, vector<vector<bool>>(n, vector<bool>(64, false)));
        visited[startX][startY][0] = true;
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto state = q.front();
            q.pop();
            int x = state[0], y = state[1], keys = state[2], steps = state[3];
            
            if (keys == allKeys) return steps;
            
            for (auto& dir : directions) {
                int nx = x + dir[0], ny = y + dir[1];
                int newKeys = keys;
                
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] == '#') {
                    continue;
                }
                
                char cell = grid[nx][ny];
                
                // If it's a lock and we don't have the key, skip
                if (isupper(cell) && !(keys & (1 << (cell - 'A')))) {
                    continue;
                }
                
                // If it's a key, pick it up
                if (islower(cell)) {
                    newKeys |= (1 << (cell - 'a'));
                }
                
                if (!visited[nx][ny][newKeys]) {
                    visited[nx][ny][newKeys] = true;
                    q.push({nx, ny, newKeys, steps + 1});
                }
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(m * n * 2^k), Space: O(m * n * 2^k)",
    comments: [
      {
        author: "BFSExpert",
        content: "BFS with state tracking! Tracks keys collected using bitmask.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of bitmask for efficient key state representation.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use Dijkstra but BFS is sufficient for unweighted graph.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use A* with heuristic but BFS is simpler."
      }
    ]
  },
  // ===== BINARY SEARCH SOLUTIONS =====
  
  // Easy (6)
  {
    problemName: "Binary Search",
    author: "Binary Search Master",
    explanation: "Classic binary search algorithm. Maintain left and right pointers, calculate mid, and adjust search range based on comparison with target.",
    solution: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "AlgorithmExpert",
        content: "Classic binary search implementation! Clean and efficient.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of left + (right - left) / 2 to avoid integer overflow.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty array and single element correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion but iterative is more space efficient."
      }
    ]
  },

  {
    problemName: "First Bad Version",
    author: "Binary Search Detective",
    explanation: "Use binary search to find the first bad version. If mid is bad, search left half. Otherwise, search right half.",
    solution: `// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int left = 1, right = n;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Clean binary search variant! Finds first occurrence of bad version.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of left < right to avoid infinite loops.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles case where first version is bad correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use left <= right but this approach is more elegant."
      }
    ]
  },

  {
    problemName: "Search Insert Position",
    author: "Binary Search Inserter",
    explanation: "Use binary search to find insertion position. If target found, return index. Otherwise, return left pointer.",
    solution: `class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Classic insertion position search! Left pointer gives correct insertion index.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation. Left pointer naturally ends at insertion position.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles insertion at beginning, middle, and end correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use lower_bound from STL but understanding the algorithm is important."
      }
    ]
  },

  {
    problemName: "Sqrt(x)",
    author: "Binary Search Calculator",
    explanation: "Use binary search to find integer square root. Search in range [0, x] for the largest number whose square <= x.",
    solution: `class Solution {
public:
    int mySqrt(int x) {
        if (x <= 1) return x;
        
        int left = 1, right = x;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Use division to avoid overflow
            if (mid <= x / mid) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(log x), Space: O(1)",
    comments: [
      {
        author: "MathExpert",
        content: "Clever binary search for square root! Uses division to avoid overflow.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of overflow by using division instead of multiplication.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles x=0 and x=1 as base cases correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Newton's method but binary search is more intuitive."
      }
    ]
  },

  {
    problemName: "Arranging Coins",
    author: "Binary Search Arranger",
    explanation: "Use binary search to find the maximum complete rows. The k-th triangular number is k*(k+1)/2.",
    solution: `class Solution {
public:
    int arrangeCoins(int n) {
        long left = 0, right = n;
        
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long coins = mid * (mid + 1) / 2;
            
            if (coins == n) {
                return mid;
            } else if (coins < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return right;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "MathExpert",
        content: "Binary search on triangular numbers! Finds maximum complete rows.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of long to avoid integer overflow.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Returns right pointer when exact match not found.",
      },
      {
        author: "AlternativeThinker",
        content: "We could solve quadratic equation but binary search is more general."
      }
    ]
  },

  {
    problemName: "Valid Perfect Square",
    author: "Binary Search Checker",
    explanation: "Use binary search to check if a number is perfect square. Search in range [1, num] for integer square root.",
    solution: `class Solution {
public:
    bool isPerfectSquare(int num) {
        if (num <= 1) return true;
        
        long left = 1, right = num;
        
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long square = mid * mid;
            
            if (square == num) {
                return true;
            } else if (square < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Binary search for perfect square check! Efficient O(log n) solution.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of long to handle large numbers and avoid overflow.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles edge cases like 0, 1, and large numbers correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Newton's method but binary search is sufficient."
      }
    ]
  },

  // Medium (10)
  {
    problemName: "Search a 2D Matrix",
    author: "Binary Search Matrix Explorer",
    explanation: "Treat the 2D matrix as a 1D sorted array. Use binary search with index conversion: row = mid / cols, col = mid % cols.",
    solution: `class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size(), n = matrix[0].size();
        int left = 0, right = m * n - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int row = mid / n, col = mid % n;
            int value = matrix[row][col];
            
            if (value == target) {
                return true;
            } else if (value < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(log(m*n)), Space: O(1)",
    comments: [
      {
        author: "MatrixExpert",
        content: "Clever 1D treatment of 2D matrix! Uses division and modulo for index conversion.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean index calculation: row = mid/cols, col = mid%cols.",
      },
      {
        author: "OptimizationExpert",
        content: "More efficient than searching row first then column.",
      },
      {
        author: "AlternativeThinker",
        content: "We could search row first then column but this is one-pass."
      }
    ]
  },

  {
    problemName: "Find First and Last Position of Element in Sorted Array",
    author: "Binary Search Range Finder",
    explanation: "Use two binary searches: one to find first occurrence, one to find last occurrence.",
    solution: `class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        return {findFirst(nums, target), findLast(nums, target)};
    }
    
private:
    int findFirst(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int first = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                first = mid;
                right = mid - 1; // Continue searching left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return first;
    }
    
    int findLast(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int last = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                last = mid;
                left = mid + 1; // Continue searching right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return last;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Two-pass binary search! Finds first and last occurrence separately.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation into helper functions for clarity.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where target is not present correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use lower_bound and upper_bound from STL."
      }
    ]
  },

  {
    problemName: "Capacity To Ship Packages Within D Days",
    author: "Binary Search Capacity Finder",
    explanation: "Binary search on possible capacity. Check if a given capacity can ship all packages within D days.",
    solution: `class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        int left = *max_element(weights.begin(), weights.end());
        int right = accumulate(weights.begin(), weights.end(), 0);
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canShip(weights, days, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canShip(vector<int>& weights, int days, int capacity) {
        int currentLoad = 0;
        int daysNeeded = 1;
        
        for (int weight : weights) {
            if (currentLoad + weight > capacity) {
                daysNeeded++;
                currentLoad = 0;
            }
            currentLoad += weight;
        }
        
        return daysNeeded <= days;
    }
};`,
    notes: "Time: O(n log s) where s is sum of weights, Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Binary search on answer! Checks feasibility for each capacity.",
      },
      {
        author: "CodeReviewer42",
        content: "Good search range: from max weight to total weight.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient O(n log s) solution instead of brute force.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use greedy with priority queue but binary search is better."
      }
    ]
  },

  {
    problemName: "Split Array Largest Sum",
    author: "Binary Search Splitter",
    explanation: "Binary search on possible maximum subarray sum. Check if array can be split into m subarrays with given max sum.",
    solution: `class Solution {
public:
    int splitArray(vector<int>& nums, int m) {
        int left = *max_element(nums.begin(), nums.end());
        int right = accumulate(nums.begin(), nums.end(), 0);
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canSplit(nums, m, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canSplit(vector<int>& nums, int m, int maxSum) {
        int currentSum = 0;
        int splits = 1; // Start with 1 subarray
        
        for (int num : nums) {
            if (currentSum + num > maxSum) {
                splits++;
                currentSum = 0;
            }
            currentSum += num;
        }
        
        return splits <= m;
    }
};`,
    notes: "Time: O(n log s) where s is sum of array, Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Similar to ship packages problem! Binary search on maximum subarray sum.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean feasibility check with subarray counting.",
      },
      {
        author: "OptimizationExpert",
        content: "Optimal solution for this minimization problem.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP but it would be O(n² m) time."
      }
    ]
  },

  {
    problemName: "Koko Eating Bananas",
    author: "Binary Search Eater",
    explanation: "Binary search on eating speed. Check if Koko can eat all bananas within h hours at given speed.",
    solution: `class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int left = 1;
        int right = *max_element(piles.begin(), piles.end());
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canEat(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canEat(vector<int>& piles, int h, int speed) {
        long hours = 0; // Use long to avoid overflow
        for (int pile : piles) {
            hours += (pile + speed - 1) / speed; // Ceiling division
        }
        return hours <= h;
    }
};`,
    notes: "Time: O(n log m) where m is max pile, Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Binary search on eating speed! Uses ceiling division for hour calculation.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of (pile + speed - 1) / speed for ceiling division.",
      },
      {
        author: "OptimizationExpert",
        content: "Efficient O(n log m) solution.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use float division with ceil but integer math is faster."
      }
    ]
  },

  {
    problemName: "Find Peak Element",
    author: "Binary Search Peak Finder",
    explanation: "Use binary search to find peak. Compare mid with mid+1 to determine search direction.",
    solution: `class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[mid + 1]) {
                // Peak is in left half (including mid)
                right = mid;
            } else {
                // Peak is in right half
                left = mid + 1;
            }
        }
        
        return left;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Clever binary search for peak finding! Compares adjacent elements.",
      },
      {
        author: "CodeReviewer42",
        content: "Simple and elegant solution. No need to check both neighbors.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single element and two element arrays correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could check both neighbors but comparing with right neighbor is sufficient."
      }
    ]
  },

  {
    problemName: "Search in Rotated Sorted Array II",
    author: "Binary Search Rotated Array Expert",
    explanation: "Handle duplicates by skipping them. When nums[left] == nums[mid] == nums[right], increment left and decrement right.",
    solution: `class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return true;
            }
            
            // Handle duplicates
            if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
                left++;
                right--;
            }
            // Left side is sorted
            else if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // Right side is sorted
            else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(n) worst case (all duplicates), O(log n) average, Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Handles duplicates in rotated array! Skips duplicates when all three pointers match.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of the duplicate case by incrementing left and decrementing right.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Works correctly with arrays containing many duplicates.",
      },
      {
        author: "AlternativeThinker",
        content: "We could find pivot first but this approach is more direct."
      }
    ]
  },

  {
    problemName: "Time Based Key-Value Store",
    author: "Binary Search Time Store",
    explanation: "Use hash map to store key -> list of (timestamp, value). Use binary search to find value with largest timestamp <= given timestamp.",
    solution: `class TimeMap {
private:
    unordered_map<string, vector<pair<int, string>>> store;
    
public:
    TimeMap() {}
    
    void set(string key, string value, int timestamp) {
        store[key].push_back({timestamp, value});
    }
    
    string get(string key, int timestamp) {
        if (!store.count(key)) return "";
        
        vector<pair<int, string>>& values = store[key];
        
        // Binary search for largest timestamp <= given timestamp
        int left = 0, right = values.size() - 1;
        string result = "";
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (values[mid].first <= timestamp) {
                result = values[mid].second;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(log n) for get, O(1) for set, Space: O(n)",
    comments: [
      {
        author: "DataStructureExpert",
        content: "Efficient time-based key-value store! Uses binary search for timestamp queries.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with vector of pairs for each key.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use map instead of vector but vector is more space efficient.",
      },
      {
        author: "AlternativeThinker",
        content: "We could store timestamps separately but this approach is simpler."
      }
    ]
  },

  // Hard (4)
  {
    problemName: "Find Minimum in Rotated Sorted Array II",
    author: "Binary Search Minimum Finder",
    explanation: "Handle duplicates by skipping them. Compare mid with right to determine search direction.",
    solution: `class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[right]) {
                // Minimum is in right half
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                // Minimum is in left half (including mid)
                right = mid;
            } else {
                // nums[mid] == nums[right], skip duplicate
                right--;
            }
        }
        
        return nums[left];
    }
};`,
    notes: "Time: O(n) worst case (all duplicates), O(log n) average, Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Handles duplicates in rotated array! Compares with right element and skips duplicates.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean solution. Decrements right when mid equals right.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Works correctly with arrays containing many duplicates.",
      },
      {
        author: "AlternativeThinker",
        content: "We could compare with left element but comparing with right is more robust."
      }
    ]
  },

  {
    problemName: "Max Sum of Rectangle No Larger Than K",
    author: "Binary Search Rectangle Finder",
    explanation: "Fix left and right columns, compute prefix sums for rows, then use binary search to find max sum <= k.",
    solution: `class Solution {
public:
    int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
        int m = matrix.size(), n = matrix[0].size();
        int result = INT_MIN;
        
        // Try all possible left columns
        for (int left = 0; left < n; left++) {
            vector<int> rowSums(m, 0);
            
            // Try all possible right columns
            for (int right = left; right < n; right++) {
                // Update row sums for current left-right pair
                for (int i = 0; i < m; i++) {
                    rowSums[i] += matrix[i][right];
                }
                
                // Find max subarray sum <= k in rowSums
                result = max(result, maxSubarraySum(rowSums, k));
            }
        }
        
        return result;
    }
    
private:
    int maxSubarraySum(vector<int>& nums, int k) {
        int maxSum = INT_MIN;
        int prefixSum = 0;
        set<int> prefixSums;
        prefixSums.insert(0);
        
        for (int num : nums) {
            prefixSum += num;
            
            // Find smallest prefixSum >= (prefixSum - k)
            auto it = prefixSums.lower_bound(prefixSum - k);
            if (it != prefixSums.end()) {
                maxSum = max(maxSum, prefixSum - *it);
            }
            
            prefixSums.insert(prefixSum);
        }
        
        return maxSum;
    }
};`,
    notes: "Time: O(min(m,n)² * max(m,n) log max(m,n)), Space: O(max(m,n))",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Complex 2D problem reduced to 1D! Uses Kadane's algorithm with binary search.",
      },
      {
        author: "CodeReviewer42",
        content: "Clever use of set and lower_bound to find max subarray sum <= k.",
      },
      {
        author: "OptimizationExpert",
        content: "We could optimize by choosing smaller dimension for outer loops.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use brute force but that would be O(m² n²)."
      }
    ]
  },
  {
    problemName: "Kth Largest Element in a Stream",
    author: "Min-Heap Stream Processor",
    explanation: "Maintain a min-heap of size k to always have quick access to the kth largest element. When adding new elements, push them to the heap and pop if size exceeds k.",
    solution: `class KthLargest {
private:
    priority_queue<int, vector<int>, greater<int>> minHeap;
    int k;
    
public:
    KthLargest(int k, vector<int>& nums) {
        this->k = k;
        for (int num : nums) {
            add(num);
        }
    }
    
    int add(int val) {
        minHeap.push(val);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
        return minHeap.top();
    }
};`,
    notes: "Time: O(n log k), Space: O(k)",
    comments: [
      {
        author: "HeapMaster",
        content: "Using min-heap ensures we always have the k largest elements with the smallest at top being kth largest"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper constructor initialization and efficient add operation"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles initial empty array case correctly by building heap incrementally"
      },
      {
        author: "AlternativeThinker",
        content: "Could also use quickselect for initial array but heap is better for stream"
      }
    ]
  },
  {
    problemName: "Last Stone Weight",
    author: "Max-Heap Stone Smasher",
    explanation: "Use a max-heap to always get the two heaviest stones. Smash them together and push the result back if non-zero.",
    solution: `class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> maxHeap(stones.begin(), stones.end());
        
        while (maxHeap.size() > 1) {
            int y = maxHeap.top(); maxHeap.pop();
            int x = maxHeap.top(); maxHeap.pop();
            
            if (x != y) {
                maxHeap.push(y - x);
            }
        }
        
        return maxHeap.empty() ? 0 : maxHeap.top();
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "HeapMaster",
        content: "Max-heap perfectly fits the problem requirement of always getting largest elements"
      },
      {
        author: "CodeReviewer42",
        content: "Efficient implementation with proper edge case handling for empty heap"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly handles case where all stones destroy each other completely"
      },
      {
        author: "AlternativeThinker",
        content: "Could use multiset but heap provides better time complexity"
      }
    ]
  },
  {
    problemName: "The K Weakest Rows in a Matrix",
    author: "Heap with Custom Comparator",
    explanation: "Use a max-heap to track k weakest rows based on soldier count and row index. Soldier count is found using binary search.",
    solution: `class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        // Max heap to store pairs of (soldier_count, row_index)
        priority_queue<pair<int, int>> maxHeap;
        
        for (int i = 0; i < mat.size(); i++) {
            int soldiers = countSoldiers(mat[i]);
            maxHeap.push({soldiers, i});
            
            // Maintain only k elements in heap
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        
        // Extract results in reverse order
        vector<int> result(k);
        for (int i = k - 1; i >= 0; i--) {
            result[i] = maxHeap.top().second;
            maxHeap.pop();
        }
        
        return result;
    }
    
private:
    int countSoldiers(vector<int>& row) {
        int left = 0, right = row.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (row[mid] == 1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left; // Number of soldiers
    }
};`,
    notes: "Time: O(m log n + m log k), Space: O(k)",
    comments: [
      {
        author: "HeapMaster",
        content: "Max-heap with custom comparator efficiently finds k smallest elements"
      },
      {
        author: "CodeReviewer42",
        content: "Good separation of concerns with helper function for soldier counting"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles edge cases where multiple rows have same soldier count using row index"
      },
      {
        author: "AlternativeThinker",
        content: "Could also use quickselect for better average case performance"
      }
    ]
  },
  {
    problemName: "Maximum Product of Two Elements in an Array",
    author: "Two Largest Finder",
    explanation: "Find the two largest elements in the array using a max-heap or direct scanning, then calculate (max1-1)*(max2-1).",
    solution: `class Solution {
public:
    int maxProduct(vector<int>& nums) {
        priority_queue<int> maxHeap(nums.begin(), nums.end());
        
        int first = maxHeap.top(); maxHeap.pop();
        int second = maxHeap.top(); maxHeap.pop();
        
        return (first - 1) * (second - 1);
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "HeapMaster",
        content: "Heap provides clean solution though direct scanning would be more space efficient"
      },
      {
        author: "CodeReviewer42",
        content: "Simple and readable implementation"
      },
      {
        author: "EdgeCaseHunter",
        content: "Works correctly for arrays with duplicate maximum values"
      },
      {
        author: "AlternativeThinker",
        content: "Can be solved in O(1) space by tracking two largest elements manually"
      }
    ]
  },
  {
    problemName: "Kth Largest Element in an Array",
    author: "Quickselect Expert",
    explanation: "Use quickselect algorithm to find kth largest element without fully sorting the array, achieving O(n) average time.",
    solution: `class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        return quickSelect(nums, 0, nums.size() - 1, nums.size() - k);
    }
    
private:
    int quickSelect(vector<int>& nums, int left, int right, int k) {
        if (left == right) return nums[left];
        
        int pivotIndex = partition(nums, left, right);
        
        if (k == pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return quickSelect(nums, left, pivotIndex - 1, k);
        } else {
            return quickSelect(nums, pivotIndex + 1, right, k);
        }
    }
    
    int partition(vector<int>& nums, int left, int right) {
        int pivot = nums[right];
        int i = left;
        
        for (int j = left; j < right; j++) {
            if (nums[j] <= pivot) {
                swap(nums[i], nums[j]);
                i++;
            }
        }
        swap(nums[i], nums[right]);
        return i;
    }
};`,
    notes: "Time: O(n) average, O(n²) worst, Space: O(1)",
    comments: [
      {
        author: "AlgorithmExpert",
        content: "Quickselect provides optimal average case time complexity for this problem"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation of Lomuto partition scheme"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicate elements correctly in the partition"
      },
      {
        author: "AlternativeThinker",
        content: "Min-heap approach also works with O(n log k) time and O(k) space"
      }
    ]
  },
  {
    problemName: "Top K Frequent Elements",
    author: "Bucket Sort Specialist",
    explanation: "Use frequency map and bucket sort to group elements by frequency, then extract top k frequent elements.",
    solution: `class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        // Count frequencies
        unordered_map<int, int> freqMap;
        for (int num : nums) {
            freqMap[num]++;
        }
        
        // Bucket sort by frequency
        vector<vector<int>> buckets(nums.size() + 1);
        for (auto& [num, freq] : freqMap) {
            buckets[freq].push_back(num);
        }
        
        // Extract top k frequent elements
        vector<int> result;
        for (int i = buckets.size() - 1; i >= 0 && result.size() < k; i--) {
            for (int num : buckets[i]) {
                result.push_back(num);
                if (result.size() == k) break;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "AlgorithmExpert",
        content: "Bucket sort approach provides optimal O(n) time complexity"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper use of unordered_map and vector buckets"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where multiple elements have same frequency correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Min-heap approach with O(n log k) is also popular"
      }
    ]
  },
  {
    problemName: "Sort Characters By Frequency",
    author: "Frequency-Based Sorter",
    explanation: "Count character frequencies, then sort characters based on frequency in descending order.",
    solution: `class Solution {
public:
    string frequencySort(string s) {
        // Count frequencies
        unordered_map<char, int> freqMap;
        for (char c : s) {
            freqMap[c]++;
        }
        
        // Sort characters by frequency
        sort(s.begin(), s.end(), [&](char a, char b) {
            if (freqMap[a] == freqMap[b]) {
                return a < b; // Secondary sort by character
            }
            return freqMap[a] > freqMap[b];
        });
        
        return s;
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "AlgorithmExpert",
        content: "Custom comparator with frequency map provides elegant solution"
      },
      {
        author: "CodeReviewer42",
        content: "Clean lambda function with proper secondary sorting"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles tie-breaking when frequencies are equal"
      },
      {
        author: "AlternativeThinker",
        content: "Bucket sort approach can achieve O(n) time"
      }
    ]
  },
  {
    problemName: "K Closest Points to Origin",
    author: "Max-Heap Distance Tracker",
    explanation: "Use a max-heap to maintain k closest points to origin based on Euclidean distance.",
    solution: `class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        // Max heap to store (distance, index) pairs
        priority_queue<pair<double, int>> maxHeap;
        
        for (int i = 0; i < points.size(); i++) {
            int x = points[i][0], y = points[i][1];
            double dist = sqrt(x * x + y * y);
            
            maxHeap.push({dist, i});
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        
        // Extract results
        vector<vector<int>> result;
        while (!maxHeap.empty()) {
            result.push_back(points[maxHeap.top().second]);
            maxHeap.pop();
        }
        
        return result;
    }
};`,
    notes: "Time: O(n log k), Space: O(k)",
    comments: [
      {
        author: "HeapMaster",
        content: "Max-heap efficiently maintains k smallest distances without full sorting"
      },
      {
        author: "CodeReviewer42",
        content: "Good use of pair to store both distance and original index"
      },
      {
        author: "EdgeCaseHunter",
        content: "Avoids floating point precision issues by comparing squared distances"
      },
      {
        author: "AlternativeThinker",
        content: "Quickselect can achieve O(n) average time complexity"
      }
    ]
  },
  {
    problemName: "Reorganize String",
    author: "Max-Heap Character Arranger",
    explanation: "Use max-heap to always place the most frequent character first while ensuring no two adjacent characters are same.",
    solution: `class Solution {
public:
    string reorganizeString(string s) {
        // Count frequencies
        unordered_map<char, int> freqMap;
        for (char c : s) {
            freqMap[c]++;
        }
        
        // Max heap based on frequency
        priority_queue<pair<int, char>> maxHeap;
        for (auto& [ch, count] : freqMap) {
            maxHeap.push({count, ch});
        }
        
        string result;
        pair<int, char> prev = {-1, '#'}; // Previously used character
        
        while (!maxHeap.empty()) {
            auto [count, ch] = maxHeap.top();
            maxHeap.pop();
            
            result += ch;
            count--;
            
            // Push back the previous character if it still has count
            if (prev.first > 0) {
                maxHeap.push(prev);
            }
            
            // Store current character as previous for next iteration
            prev = {count, ch};
        }
        
        // If result length doesn't match original, reorganization failed
        return result.length() == s.length() ? result : "";
    }
};`,
    notes: "Time: O(n log 26), Space: O(26)",
    comments: [
      {
        author: "HeapMaster",
        content: "Greedy approach with max-heap ensures optimal character placement"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant solution with prev variable to avoid consecutive duplicates"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly identifies when reorganization is impossible"
      },
      {
        author: "AlternativeThinker",
        content: "Can also be solved by interleaving most frequent character with others"
      }
    ]
  },
  {
    problemName: "Task Scheduler",
    author: "Greedy Interval Calculator",
    explanation: "Calculate minimum intervals by considering the most frequent task and filling idle slots with other tasks.",
    solution: `class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        // Count task frequencies
        vector<int> freq(26, 0);
        for (char task : tasks) {
            freq[task - 'A']++;
        }
        
        // Find maximum frequency and count of tasks with max frequency
        int maxFreq = *max_element(freq.begin(), freq.end());
        int maxCount = 0;
        for (int f : freq) {
            if (f == maxFreq) {
                maxCount++;
            }
        }
        
        // Calculate minimum intervals
        int partCount = maxFreq - 1;
        int partLength = n - (maxCount - 1);
        int emptySlots = partCount * partLength;
        int availableTasks = tasks.size() - maxFreq * maxCount;
        int idles = max(0, emptySlots - availableTasks);
        
        return tasks.size() + idles;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "AlgorithmExpert",
        content: "Mathematical approach provides O(n) solution without simulation"
      },
      {
        author: "CodeReviewer42",
        content: "Efficient calculation using frequency array and mathematical formula"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where n=0 and all tasks are same correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Max-heap simulation approach also works but is less efficient"
      }
    ]
  },
  {
    problemName: "Find K Pairs with Smallest Sums",
    author: "Min-Heap Pair Generator",
    explanation: "Use min-heap to generate pairs in sorted order, starting with all (nums1[i], nums2[0]) pairs and expanding incrementally.",
    solution: `class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<vector<int>> result;
        if (nums1.empty() || nums2.empty()) return result;
        
        // Min heap: (sum, index_in_nums1, index_in_nums2)
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;
        
        // Push all (nums1[i], nums2[0]) pairs initially
        for (int i = 0; i < nums1.size() && i < k; i++) {
            minHeap.push({nums1[i] + nums2[0], i, 0});
        }
        
        // Extract k smallest pairs
        while (k-- > 0 && !minHeap.empty()) {
            auto top = minHeap.top();
            minHeap.pop();
            
            int i = top[1], j = top[2];
            result.push_back({nums1[i], nums2[j]});
            
            // Push next pair from nums2 if available
            if (j + 1 < nums2.size()) {
                minHeap.push({nums1[i] + nums2[j + 1], i, j + 1});
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(k log k), Space: O(k)",
    comments: [
      {
        author: "HeapMaster",
        content: "Efficient approach that generates pairs on-demand without precomputing all"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with vector-based min-heap and proper bounds checking"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where k is larger than total possible pairs correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Binary search approach exists but is more complex to implement"
      }
    ]
  },
  {
    problemName: "Kth Smallest Element in a Sorted Matrix",
    author: "Min-Heap Matrix Traverser",
    explanation: "Use min-heap to traverse matrix in sorted order, starting with first column and moving rightwards.",
    solution: `class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        int n = matrix.size();
        
        // Min heap: (value, row, col)
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;
        
        // Push first element of each row
        for (int i = 0; i < n; i++) {
            minHeap.push({matrix[i][0], i, 0});
        }
        
        // Extract k-1 smallest elements
        while (k-- > 1) {
            auto top = minHeap.top();
            minHeap.pop();
            
            int row = top[1], col = top[2];
            
            // Push next element in same row if available
            if (col + 1 < n) {
                minHeap.push({matrix[row][col + 1], row, col + 1});
            }
        }
        
        return minHeap.top()[0];
    }
};`,
    notes: "Time: O(k log n), Space: O(n)",
    comments: [
      {
        author: "HeapMaster",
        content: "Min-heap efficiently traverses sorted matrix without full sorting"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper tracking of row and column indices"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles k=1 case correctly without unnecessary operations"
      },
      {
        author: "AlternativeThinker",
        content: "Binary search approach can achieve O(n log(max-min)) time"
      }
    ]
  },
  {
    problemName: "Find Median from Data Stream",
    author: "Two-Heap Balance Master",
    explanation: "Maintain two heaps - max-heap for lower half and min-heap for upper half, balancing to ensure median access in O(1).",
    solution: `class MedianFinder {
private:
    priority_queue<int> maxHeap; // Lower half (max at top)
    priority_queue<int, vector<int>, greater<int>> minHeap; // Upper half (min at top)
    
public:
    MedianFinder() {}
    
    void addNum(int num) {
        // Always add to maxHeap first, then balance
        maxHeap.push(num);
        
        // Ensure all elements in maxHeap <= all elements in minHeap
        if (!maxHeap.empty() && !minHeap.empty() && maxHeap.top() > minHeap.top()) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        }
        
        // Balance sizes: maxHeap can have at most one more element than minHeap
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }
    
    double findMedian() {
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.top();
        } else {
            return (maxHeap.top() + minHeap.top()) / 2.0;
        }
    }
};`,
    notes: "Time: O(log n) add, O(1) find, Space: O(n)",
    comments: [
      {
        author: "HeapMaster",
        content: "Two-heap approach is optimal for streaming median finding"
      },
      {
        author: "CodeReviewer42",
        content: "Clean balancing logic with proper size management"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles both even and odd total counts correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Balanced BST approach also works but is more complex"
      }
    ]
  },
  {
    problemName: "Sliding Window Median",
    author: "Two-Heap Window Manager",
    explanation: "Extend two-heap approach for sliding window by maintaining heaps for current window and handling element removal.",
    solution: `class Solution {
public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        vector<double> result;
        multiset<int> window(nums.begin(), nums.begin() + k);
        auto mid = next(window.begin(), k / 2);
        
        for (int i = k; ; i++) {
            // Calculate current median
            if (k % 2 == 0) {
                result.push_back((*mid + *prev(mid)) / 2.0);
            } else {
                result.push_back(*mid);
            }
            
            // Break if at end
            if (i == nums.size()) break;
            
            // Insert new element
            window.insert(nums[i]);
            if (nums[i] < *mid) {
                mid--;
            }
            
            // Remove old element
            if (nums[i - k] <= *mid) {
                mid++;
            }
            window.erase(window.find(nums[i - k]));
        }
        
        return result;
    }
};`,
    notes: "Time: O(n log k), Space: O(k)",
    comments: [
      {
        author: "AlgorithmExpert",
        content: "Multiset provides efficient insertion, deletion and median access"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant iterator management for median tracking"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicate values correctly using multiset"
      },
      {
        author: "AlternativeThinker",
        content: "Two-heap with lazy deletion is also possible but more complex"
      }
    ]
  },
  {
    problemName: "IPO",
    author: "Greedy Capital Maximizer",
    explanation: "Use max-heap for profits and min-heap for capital requirements, greedily selecting most profitable projects within current capital.",
    solution: `class Solution {
public:
    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {
        int n = profits.size();
        vector<pair<int, int>> projects;
        
        // Create pairs of (capital, profit)
        for (int i = 0; i < n; i++) {
            projects.push_back({capital[i], profits[i]});
        }
        
        // Sort projects by capital requirement
        sort(projects.begin(), projects.end());
        
        // Max heap for available profits
        priority_queue<int> maxHeap;
        int i = 0;
        
        // Select up to k projects
        while (k--) {
            // Add all projects we can afford with current capital
            while (i < n && projects[i].first <= w) {
                maxHeap.push(projects[i].second);
                i++;
            }
            
            // If no projects available, break
            if (maxHeap.empty()) {
                break;
            }
            
            // Select most profitable project
            w += maxHeap.top();
            maxHeap.pop();
        }
        
        return w;
    }
};`,
    notes: "Time: O(n log n + k log n), Space: O(n)",
    comments: [
      {
        author: "GreedyExpert",
        content: "Greedy approach optimally selects most profitable affordable projects"
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of capital sorting and profit selection"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles case where capital is insufficient for any projects"
      },
      {
        author: "AlternativeThinker",
        content: "Could optimize with different data structures for very large inputs"
      }
    ]
  },
  {
    problemName: "Min Stack",
    author: "Dual Stack Designer",
    explanation: "Use two stacks - one for regular elements and one to track minimum values. Push/pop from both stacks simultaneously to maintain O(1) min access.",
    solution: `class MinStack {
private:
    stack<int> mainStack;
    stack<int> minStack;
    
public:
    MinStack() {}
    
    void push(int val) {
        mainStack.push(val);
        if (minStack.empty() || val <= minStack.top()) {
            minStack.push(val);
        } else {
            minStack.push(minStack.top()); // Keep current min
        }
    }
    
    void pop() {
        mainStack.pop();
        minStack.pop();
    }
    
    int top() {
        return mainStack.top();
    }
    
    int getMin() {
        return minStack.top();
    }
};`,
    notes: "Time: O(1) all operations, Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Dual stack approach guarantees O(1) time for all operations including getMin"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper handling of duplicate minimum values"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty stack cases implicitly through stack's own error handling"
      },
      {
        author: "AlternativeThinker",
        content: "Could use single stack storing pairs (value, current_min) for same complexity"
      }
    ]
  },
  {
    problemName: "Implement Queue using Stacks",
    author: "Two Stack Queue Architect",
    explanation: "Use two stacks - input stack for enqueue operations and output stack for dequeue operations. Transfer elements when output stack is empty.",
    solution: `class MyQueue {
private:
    stack<int> input, output;
    
    void transfer() {
        while (!input.empty()) {
            output.push(input.top());
            input.pop();
        }
    }
    
public:
    MyQueue() {}
    
    void push(int x) {
        input.push(x);
    }
    
    int pop() {
        if (output.empty()) {
            transfer();
        }
        int val = output.top();
        output.pop();
        return val;
    }
    
    int peek() {
        if (output.empty()) {
            transfer();
        }
        return output.top();
    }
    
    bool empty() {
        return input.empty() && output.empty();
    }
};`,
    notes: "Time: O(1) amortized, Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Amortized O(1) complexity achieved by transferring elements only when necessary"
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation with helper function for stack transfer"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly handles all FIFO operations including peek on empty queue"
      },
      {
        author: "AlternativeThinker",
        content: "Single stack with recursion also possible but uses implicit call stack"
      }
    ]
  },
  {
    problemName: "Next Greater Element I",
    author: "Monotonic Stack Solver",
    explanation: "Use monotonic decreasing stack to find next greater elements for all elements, then map results to subset array.",
    solution: `class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> nextGreater;
        stack<int> st;
        
        // Find next greater for all elements in nums2
        for (int num : nums2) {
            while (!st.empty() && st.top() < num) {
                nextGreater[st.top()] = num;
                st.pop();
            }
            st.push(num);
        }
        
        // Remaining elements have no next greater
        while (!st.empty()) {
            nextGreater[st.top()] = -1;
            st.pop();
        }
        
        // Build result for nums1
        vector<int> result;
        for (int num : nums1) {
            result.push_back(nextGreater[num]);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n + m), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Monotonic stack pattern efficiently finds next greater element in O(n) time"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with hash map for quick lookups"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where no greater element exists correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Brute force O(n*m) solution works but is inefficient for large inputs"
      }
    ]
  },
  {
    problemName: "Backspace String Compare",
    author: "Stack String Processor",
    explanation: "Process strings using stacks to handle backspace characters, then compare resulting strings.",
    solution: `class Solution {
public:
    bool backspaceCompare(string s, string t) {
        return processString(s) == processString(t);
    }
    
private:
    string processString(string str) {
        stack<char> st;
        for (char c : str) {
            if (c == '#') {
                if (!st.empty()) {
                    st.pop();
                }
            } else {
                st.push(c);
            }
        }
        
        // Build result string from stack
        string result;
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }
        return result;
    }
};`,
    notes: "Time: O(n + m), Space: O(n + m)",
    comments: [
      {
        author: "StackMaster",
        content: "Stack naturally handles backspace operations in LIFO order"
      },
      {
        author: "CodeReviewer42",
        content: "Good separation with helper function to avoid code duplication"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple consecutive backspaces and backspaces on empty string"
      },
      {
        author: "AlternativeThinker",
        content: "Two pointer approach can solve this in O(1) space"
      }
    ]
  },
  {
    problemName: "Remove All Adjacent Duplicates In String",
    author: "Stack Duplicate Remover",
    explanation: "Use stack to remove adjacent duplicates by comparing current character with top of stack.",
    solution: `class Solution {
public:
    string removeDuplicates(string s) {
        stack<char> st;
        
        for (char c : s) {
            if (!st.empty() && st.top() == c) {
                st.pop(); // Remove duplicate
            } else {
                st.push(c);
            }
        }
        
        // Build result from stack
        string result;
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Stack is perfect for detecting and removing adjacent duplicates"
      },
      {
        author: "CodeReviewer42",
        content: "Simple and efficient implementation"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple rounds of duplicate removal correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Can be solved with string as stack for O(1) extra space"
      }
    ]
  },
  {
    problemName: "Evaluate Reverse Polish Notation",
    author: "Stack Calculator",
    explanation: "Use stack to evaluate RPN expressions - push numbers, pop and apply operators when encountering them.",
    solution: `class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> st;
        
        for (string token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                int b = st.top(); st.pop();
                int a = st.top(); st.pop();
                
                if (token == "+") st.push(a + b);
                else if (token == "-") st.push(a - b);
                else if (token == "*") st.push(a * b);
                else if (token == "/") st.push(a / b);
            } else {
                st.push(stoi(token));
            }
        }
        
        return st.top();
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Stack naturally handles postfix notation evaluation"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper operator precedence handling"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles negative numbers and division correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Recursive approach possible but stack is more intuitive"
      }
    ]
  },
  {
    problemName: "Daily Temperatures",
    author: "Monotonic Stack Temperature Tracker",
    explanation: "Use monotonic decreasing stack to track temperatures and calculate days until warmer temperature.",
    solution: `class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> result(n, 0);
        stack<int> st; // Stack stores indices
        
        for (int i = 0; i < n; i++) {
            while (!st.empty() && temperatures[st.top()] < temperatures[i]) {
                int idx = st.top();
                st.pop();
                result[idx] = i - idx;
            }
            st.push(i);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Monotonic stack pattern efficiently finds next warmer day in O(n) time"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation storing indices instead of values"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where no warmer day exists (result remains 0)"
      },
      {
        author: "AlternativeThinker",
        content: "Can be solved from right to left with dynamic programming"
      }
    ]
  },
  {
    problemName: "Asteroid Collision",
    author: "Stack Collision Simulator",
    explanation: "Use stack to simulate asteroid collisions - right-moving asteroids are pushed, left-moving ones cause collisions.",
    solution: `class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int> st;
        
        for (int asteroid : asteroids) {
            bool destroyed = false;
            
            // Handle collisions: current asteroid moving left, top moving right
            while (!st.empty() && asteroid < 0 && st.top() > 0) {
                if (abs(asteroid) > st.top()) {
                    st.pop(); // Destroy top asteroid
                    continue;
                } else if (abs(asteroid) == st.top()) {
                    st.pop(); // Both destroyed
                    destroyed = true;
                    break;
                } else {
                    destroyed = true; // Current asteroid destroyed
                    break;
                }
            }
            
            if (!destroyed) {
                st.push(asteroid);
            }
        }
        
        // Build result from stack
        vector<int> result(st.size());
        for (int i = st.size() - 1; i >= 0; i--) {
            result[i] = st.top();
            st.pop();
        }
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Stack perfectly models the collision sequence in LIFO order"
      },
      {
        author: "CodeReviewer42",
        content: "Clear collision handling with proper size comparison"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly handles all collision scenarios including equal size asteroids"
      },
      {
        author: "AlternativeThinker",
        content: "Vector simulation also possible but stack is more efficient"
      }
    ]
  },
  {
    problemName: "Remove K Digits",
    author: "Monotonic Stack Digit Remover",
    explanation: "Use monotonic increasing stack to remove digits while maintaining smallest number. Remove larger digits from left when possible.",
    solution: `class Solution {
public:
    string removeKdigits(string num, int k) {
        if (k >= num.length()) return "0";
        
        stack<char> st;
        
        for (char digit : num) {
            while (k > 0 && !st.empty() && st.top() > digit) {
                st.pop();
                k--;
            }
            st.push(digit);
        }
        
        // Remove remaining k digits from end if needed
        while (k > 0) {
            st.pop();
            k--;
        }
        
        // Build result string
        string result;
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }
        
        // Remove leading zeros
        int start = 0;
        while (start < result.length() && result[start] == '0') {
            start++;
        }
        
        return start == result.length() ? "0" : result.substr(start);
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Monotonic stack ensures we always remove larger left digits first"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper handling of leading zeros"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles edge cases like all zeros and k >= num.length correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Greedy approach with string manipulation also works"
      }
    ]
  },
  {
    problemName: "132 Pattern",
    author: "Monotonic Stack Pattern Finder",
    explanation: "Use monotonic decreasing stack to track potential '32' patterns while maintaining the minimum value as '1'.",
    solution: `class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        int n = nums.size();
        if (n < 3) return false;
        
        stack<int> st; // Stack stores potential '2' values
        int third = INT_MIN; // This will be our '2' in '132'
        
        // Traverse from right to left
        for (int i = n - 1; i >= 0; i--) {
            // If current number is less than third, we found '1' in '132'
            if (nums[i] < third) return true;
            
            // Maintain decreasing stack, update third with popped values
            while (!st.empty() && st.top() < nums[i]) {
                third = st.top();
                st.pop();
            }
            
            st.push(nums[i]);
        }
        
        return false;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Right-to-left traversal with monotonic stack efficiently finds 132 pattern"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant solution using third variable to track potential '2'"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicate values and all edge cases correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Precomputation of min array also solves this problem"
      }
    ]
  },
  {
    problemName: "Next Greater Element II",
    author: "Circular Array Stack Solver",
    explanation: "Handle circular array by traversing twice the length and using modulo indexing with monotonic stack.",
    solution: `class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, -1);
        stack<int> st; // Stack stores indices
        
        // Traverse circular array (twice the length)
        for (int i = 0; i < 2 * n; i++) {
            int idx = i % n;
            
            while (!st.empty() && nums[st.top()] < nums[idx]) {
                result[st.top()] = nums[idx];
                st.pop();
            }
            
            // Only push during first traversal
            if (i < n) {
                st.push(idx);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Circular array handled elegantly by traversing twice with modulo"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper index management"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where no greater element exists in circular array"
      },
      {
        author: "AlternativeThinker",
        content: "Can concatenate array with itself for simpler indexing"
      }
    ]
  },
  {
    problemName: "Validate Stack Sequences",
    author: "Stack Sequence Simulator",
    explanation: "Simulate push and pop operations using a stack to verify if given sequences are valid.",
    solution: `class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> st;
        int popIndex = 0;
        
        for (int num : pushed) {
            st.push(num);
            
            // Try to pop as many as possible
            while (!st.empty() && popIndex < popped.size() && st.top() == popped[popIndex]) {
                st.pop();
                popIndex++;
            }
        }
        
        return popIndex == popped.size();
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Direct simulation is the most intuitive approach for this problem"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with efficient popping logic"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all valid and invalid sequence combinations correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Can be solved with O(1) space by using pushed array as stack"
      }
    ]
  },
  {
    problemName: "Minimum Remove to Make Valid Parentheses",
    author: "Stack Parentheses Balancer",
    explanation: "Use stack to track unmatched parentheses and mark indices for removal.",
    solution: `class Solution {
public:
    string minRemoveToMakeValid(string s) {
        stack<int> st; // Stack stores indices of '('
        unordered_set<int> toRemove;
        
        // First pass: find unmatched parentheses
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(') {
                st.push(i);
            } else if (s[i] == ')') {
                if (st.empty()) {
                    toRemove.insert(i); // Unmatched ')'
                } else {
                    st.pop(); // Matched pair
                }
            }
        }
        
        // Any remaining '(' in stack are unmatched
        while (!st.empty()) {
            toRemove.insert(st.top());
            st.pop();
        }
        
        // Build result string
        string result;
        for (int i = 0; i < s.length(); i++) {
            if (toRemove.find(i) == toRemove.end()) {
                result += s[i];
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Stack efficiently tracks unmatched parentheses indices"
      },
      {
        author: "CodeReviewer42",
        content: "Clean two-pass approach with set for removal tracking"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all edge cases including strings with no parentheses"
      },
      {
        author: "AlternativeThinker",
        content: "Two-pointer approach can solve this in O(1) extra space"
      }
    ]
  },
  {
    problemName: "Basic Calculator",
    author: "Stack Expression Evaluator",
    explanation: "Use stack to handle parentheses and operators with proper precedence, evaluating expression from left to right.",
    solution: `class Solution {
public:
    int calculate(string s) {
        stack<int> st;
        int result = 0;
        int num = 0;
        int sign = 1; // 1 for positive, -1 for negative
        
        for (char c : s) {
            if (isdigit(c)) {
                num = num * 10 + (c - '0');
            } else if (c == '+') {
                result += sign * num;
                num = 0;
                sign = 1;
            } else if (c == '-') {
                result += sign * num;
                num = 0;
                sign = -1;
            } else if (c == '(') {
                // Push current result and sign onto stack
                st.push(result);
                st.push(sign);
                // Reset for new sub-expression
                result = 0;
                sign = 1;
            } else if (c == ')') {
                // Complete current sub-expression
                result += sign * num;
                num = 0;
                // Apply sign from stack
                result *= st.top(); st.pop();
                // Add to previous result
                result += st.top(); st.pop();
            }
        }
        
        // Add last number
        result += sign * num;
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Stack handles parentheses nesting and sign propagation elegantly"
      },
      {
        author: "CodeReviewer42",
        content: "Clean state management with result, num, and sign variables"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles negative numbers, nested parentheses, and spaces correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Recursive descent parser also works but is more complex"
      }
    ]
  },
  {
    problemName: "Basic Calculator III",
    author: "Advanced Stack Calculator",
    explanation: "Extend basic calculator to handle multiplication and division with proper operator precedence using two stacks.",
    solution: `class Solution {
public:
    int calculate(string s) {
        stack<int> nums;
        stack<char> ops;
        int num = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            
            if (isdigit(c)) {
                num = num * 10 + (c - '0');
            } else if (c == '(') {
                ops.push(c);
            } else if (c == ')') {
                // Evaluate until matching '('
                while (!ops.empty() && ops.top() != '(') {
                    num = evaluate(nums, ops, num);
                }
                ops.pop(); // Remove '('
            } else if (c == '+' || c == '-' || c == '*' || c == '/') {
                // Evaluate higher precedence operations first
                while (!ops.empty() && precedence(ops.top()) >= precedence(c)) {
                    num = evaluate(nums, ops, num);
                }
                ops.push(c);
                nums.push(num);
                num = 0;
            }
        }
        
        // Evaluate remaining operations
        while (!ops.empty()) {
            num = evaluate(nums, ops, num);
        }
        
        return num;
    }
    
private:
    int precedence(char op) {
        if (op == '+' || op == '-') return 1;
        if (op == '*' || op == '/') return 2;
        return 0;
    }
    
    int evaluate(stack<int>& nums, stack<char>& ops, int num) {
        int b = num;
        int a = nums.top(); nums.pop();
        char op = ops.top(); ops.pop();
        
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
        }
        return 0;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Dual stack approach handles operator precedence and parentheses correctly"
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation with helper functions for precedence and evaluation"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all edge cases including negative results and division by constraints"
      },
      {
        author: "AlternativeThinker",
        content: "Shunting yard algorithm is another valid approach"
      }
    ]
  },
  {
    problemName: "Longest Valid Parentheses",
    author: "Stack Parentheses Tracker",
    explanation: "Use stack to track indices of unmatched parentheses and calculate longest valid substring between invalid positions.",
    solution: `class Solution {
public:
    int longestValidParentheses(string s) {
        stack<int> st;
        st.push(-1); // Base for length calculation
        int maxLength = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(') {
                st.push(i);
            } else {
                st.pop();
                if (st.empty()) {
                    st.push(i); // New base
                } else {
                    maxLength = max(maxLength, i - st.top());
                }
            }
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Stack with base index elegantly calculates valid parentheses length"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with smart use of -1 as initial base"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all patterns including nested and consecutive valid parentheses"
      },
      {
        author: "AlternativeThinker",
        content: "Dynamic programming approach also solves this in O(n) time"
      }
    ]
  },
  {
    problemName: "Intersection of Two Arrays",
    author: "Set Intersection Finder",
    explanation: "Use unordered_set to store elements from first array, then check which elements from second array exist in the set.",
    solution: `class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1(nums1.begin(), nums1.end());
        unordered_set<int> resultSet;
        
        for (int num : nums2) {
            if (set1.find(num) != set1.end()) {
                resultSet.insert(num);
            }
        }
        
        return vector<int>(resultSet.begin(), resultSet.end());
    }
};`,
    notes: "Time: O(n + m), Space: O(min(n, m))",
    comments: [
      {
        author: "HashMaster",
        content: "Set operations provide optimal O(1) lookups for intersection checking"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation using set constructors and iterators"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicates correctly by using set for result"
      },
      {
        author: "AlternativeThinker",
        content: "Could sort both arrays and use two pointers for O(1) space"
      }
    ]
  },
  {
    problemName: "Happy Number",
    author: "Cycle Detection with HashSet",
    explanation: "Use unordered_set to detect cycles while repeatedly calculating sum of squares of digits. If we reach 1, it's happy.",
    solution: `class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> seen;
        
        while (n != 1 && seen.find(n) == seen.end()) {
            seen.insert(n);
            n = getNext(n);
        }
        
        return n == 1;
    }
    
private:
    int getNext(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
};`,
    notes: "Time: O(log n), Space: O(log n)",
    comments: [
      {
        author: "HashMaster",
        content: "HashSet perfectly detects cycles in the digit square sum sequence"
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation with helper function for digit sum calculation"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly handles all numbers including those that enter infinite loops"
      },
      {
        author: "AlternativeThinker",
        content: "Floyd's cycle detection can solve this with O(1) space"
      }
    ]
  },
  {
    problemName: "Isomorphic Strings",
    author: "Bi-directional Mapping Checker",
    explanation: "Use two unordered_maps to verify character mappings work both ways (s -> t and t -> s) without conflicts.",
    solution: `class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;
        
        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;
        
        for (int i = 0; i < s.length(); i++) {
            char charS = s[i];
            char charT = t[i];
            
            // Check mapping from s to t
            if (sToT.find(charS) != sToT.end()) {
                if (sToT[charS] != charT) return false;
            } else {
                sToT[charS] = charT;
            }
            
            // Check mapping from t to s
            if (tToS.find(charT) != tToS.end()) {
                if (tToS[charT] != charS) return false;
            } else {
                tToS[charT] = charS;
            }
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1) since fixed character set",
    comments: [
      {
        author: "HashMaster",
        content: "Dual mapping ensures isomorphism works in both directions"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with early termination on mapping conflicts"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all edge cases including empty strings and many-to-one mappings"
      },
      {
        author: "AlternativeThinker",
        content: "Can use array indexing for better performance with fixed character set"
      }
    ]
  },
  {
    problemName: "Word Pattern",
    author: "Bijective Mapping Validator",
    explanation: "Similar to isomorphic strings but with words instead of characters. Use two unordered_maps to ensure pattern-character to word mapping is bijective.",
    solution: `class Solution {
public:
    bool wordPattern(string pattern, string s) {
        unordered_map<char, string> charToWord;
        unordered_map<string, char> wordToChar;
        
        vector<string> words = split(s);
        if (pattern.length() != words.size()) return false;
        
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern[i];
            string word = words[i];
            
            // Check char to word mapping
            if (charToWord.find(c) != charToWord.end()) {
                if (charToWord[c] != word) return false;
            } else {
                charToWord[c] = word;
            }
            
            // Check word to char mapping
            if (wordToChar.find(word) != wordToChar.end()) {
                if (wordToChar[word] != c) return false;
            } else {
                wordToChar[word] = c;
            }
        }
        
        return true;
    }
    
private:
    vector<string> split(string s) {
        vector<string> words;
        stringstream ss(s);
        string word;
        while (getline(ss, word, ' ')) {
            words.push_back(word);
        }
        return words;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "HashMaster",
        content: "Extends isomorphic strings concept to handle word mappings"
      },
      {
        author: "CodeReviewer42",
        content: "Good string splitting implementation with stringstream"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where pattern and word count don't match correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Could use istringstream for more efficient string splitting"
      }
    ]
  },
  {
    problemName: "Longest Consecutive Sequence",
    author: "HashSet Sequence Finder",
    explanation: "Store all numbers in unordered_set, then for each number check if it's the start of a sequence (no num-1 exists), then expand rightwards.",
    solution: `class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longest = 0;
        
        for (int num : numSet) {
            // Check if this is the start of a sequence
            if (numSet.find(num - 1) == numSet.end()) {
                int currentNum = num;
                int currentStreak = 1;
                
                // Expand the sequence
                while (numSet.find(currentNum + 1) != numSet.end()) {
                    currentNum++;
                    currentStreak++;
                }
                
                longest = max(longest, currentStreak);
            }
        }
        
        return longest;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "HashMaster",
        content: "Only checking sequence starts avoids O(n²) complexity"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant solution with O(n) average time complexity"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty array, single element, and duplicate values correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Sorting approach takes O(n log n) time but O(1) space"
      }
    ]
  },
  {
    problemName: "Insert Delete GetRandom O(1)",
    author: "Hybrid Vector-HashMap Designer",
    explanation: "Use vector for random access and unordered_map to store value-index mappings for O(1) operations.",
    solution: `class RandomizedSet {
private:
    vector<int> values;
    unordered_map<int, int> valueToIndex; // value -> index in values vector
    
public:
    RandomizedSet() {}
    
    bool insert(int val) {
        if (valueToIndex.find(val) != valueToIndex.end()) {
            return false;
        }
        
        values.push_back(val);
        valueToIndex[val] = values.size() - 1;
        return true;
    }
    
    bool remove(int val) {
        if (valueToIndex.find(val) == valueToIndex.end()) {
            return false;
        }
        
        // Move last element to deleted position
        int index = valueToIndex[val];
        int lastVal = values.back();
        
        values[index] = lastVal;
        valueToIndex[lastVal] = index;
        
        // Remove the element
        values.pop_back();
        valueToIndex.erase(val);
        
        return true;
    }
    
    int getRandom() {
        int randomIndex = rand() % values.size();
        return values[randomIndex];
    }
};`,
    notes: "Time: O(1) all operations, Space: O(n)",
    comments: [
      {
        author: "HashMaster",
        content: "Vector + HashMap hybrid achieves O(1) for all required operations"
      },
      {
        author: "CodeReviewer42",
        content: "Smart removal by swapping with last element maintains O(1) time"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all edge cases including removal of single element"
      },
      {
        author: "AlternativeThinker",
        content: "Could use reservoir sampling for true O(1) getRandom without vector"
      }
    ]
  },
  {
    problemName: "Design Underground System",
    author: "Multi-HashMap System Designer",
    explanation: "Use two unordered_maps - one for active check-ins and one for tracking travel times between stations.",
    solution: `class UndergroundSystem {
private:
    // id -> {stationName, checkInTime}
    unordered_map<int, pair<string, int>> checkIns;
    
    // route -> {totalTime, count}
    unordered_map<string, pair<int, int>> travelTimes;
    
    string getRoute(string startStation, string endStation) {
        return startStation + "->" + endStation;
    }
    
public:
    UndergroundSystem() {}
    
    void checkIn(int id, string stationName, int t) {
        checkIns[id] = {stationName, t};
    }
    
    void checkOut(int id, string endStation, int t) {
        auto [startStation, checkInTime] = checkIns[id];
        string route = getRoute(startStation, endStation);
        int travelTime = t - checkInTime;
        
        // Update travel times
        travelTimes[route].first += travelTime;
        travelTimes[route].second++;
        
        // Remove check-in record
        checkIns.erase(id);
    }
    
    double getAverageTime(string startStation, string endStation) {
        string route = getRoute(startStation, endStation);
        auto [totalTime, count] = travelTimes[route];
        return (double)totalTime / count;
    }
};`,
    notes: "Time: O(1) all operations, Space: O(n + m) where n is active trips, m is unique routes",
    comments: [
      {
        author: "HashMaster",
        content: "Multiple specialized HashMaps efficiently handle different aspects of the system"
      },
      {
        author: "CodeReviewer42",
        content: "Clean design with helper function for route key generation"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles concurrent check-ins/outs and calculates averages correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Could use nested HashMap for station pairs for faster lookups"
      }
    ]
  },
  {
    problemName: "Find Duplicate File in System",
    author: "Content-Based File Grouper",
    explanation: "Use unordered_map to group files by their content, then extract groups with multiple files as duplicates.",
    solution: `class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> contentToFiles;
        
        for (string path : paths) {
            stringstream ss(path);
            string directory;
            getline(ss, directory, ' ');
            
            string fileInfo;
            while (getline(ss, fileInfo, ' ')) {
                // Extract filename and content
                int openParen = fileInfo.find('(');
                int closeParen = fileInfo.find(')');
                
                string filename = fileInfo.substr(0, openParen);
                string content = fileInfo.substr(openParen + 1, closeParen - openParen - 1);
                
                string fullPath = directory + '/' + filename;
                contentToFiles[content].push_back(fullPath);
            }
        }
        
        // Extract groups with duplicates
        vector<vector<string>> result;
        for (auto& [content, files] : contentToFiles) {
            if (files.size() > 1) {
                result.push_back(files);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n * m) where n is paths, m is files per path, Space: O(n)",
    comments: [
      {
        author: "HashMaster",
        content: "HashMap naturally groups files by content for duplicate detection"
      },
      {
        author: "CodeReviewer42",
        content: "Good string parsing with stringstream and substr operations"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles edge cases like empty directories and files without content"
      },
      {
        author: "AlternativeThinker",
        content: "Could use regex for more robust file parsing"
      }
    ]
  },
  {
    problemName: "Brick Wall",
    author: "Edge Frequency Counter",
    explanation: "Use unordered_map to count how many bricks end at each position, then find position with maximum edges to minimize crosses.",
    solution: `class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        unordered_map<int, int> edgeCount;
        int maxEdges = 0;
        
        for (auto& row : wall) {
            int position = 0;
            // Don't include the last edge (end of wall)
            for (int i = 0; i < row.size() - 1; i++) {
                position += row[i];
                edgeCount[position]++;
                maxEdges = max(maxEdges, edgeCount[position]);
            }
        }
        
        // Minimum crosses = total rows - maximum aligned edges
        return wall.size() - maxEdges;
    }
};`,
    notes: "Time: O(n * m), Space: O(n)",
    comments: [
      {
        author: "HashMaster",
        content: "Counting edge positions transforms problem into frequency maximization"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant solution with clear mathematical insight"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly handles cases where no edges align (all crosses)"
      },
      {
        author: "AlternativeThinker",
        content: "Priority queue approach also works but is less efficient"
      }
    ]
  },
  {
    problemName: "Contiguous Array",
    author: "Prefix Sum with HashMap",
    explanation: "Treat 0 as -1 and 1 as +1, use HashMap to store first occurrence of prefix sums to find longest subarray with equal 0s and 1s.",
    solution: `class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> prefixSumIndex;
        prefixSumIndex[0] = -1; // Initial state: sum 0 at index -1
        
        int maxLength = 0;
        int sum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            // Treat 0 as -1, 1 as +1
            sum += (nums[i] == 0) ? -1 : 1;
            
            if (prefixSumIndex.find(sum) != prefixSumIndex.end()) {
                // Found matching prefix sum
                maxLength = max(maxLength, i - prefixSumIndex[sum]);
            } else {
                // Store first occurrence of this prefix sum
                prefixSumIndex[sum] = i;
            }
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "HashMaster",
        content: "Prefix sum + HashMap pattern efficiently finds subarrays with target sum"
      },
      {
        author: "CodeReviewer42",
        content: "Smart encoding of 0 as -1 transforms problem into sum zero subarray"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all cases including arrays starting with balanced subarray"
      },
      {
        author: "AlternativeThinker",
        content: "Sliding window doesn't work here due to negative numbers"
      }
    ]
  },
  {
    problemName: "Find All Duplicates in an Array",
    author: "In-Place Marker",
    explanation: "Use the array itself as a HashMap by marking visited numbers negative. When encountering a negative index, we found a duplicate.",
    solution: `class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> duplicates;
        
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1; // Convert to 0-based index
            
            if (nums[index] < 0) {
                // Already visited, this is a duplicate
                duplicates.push_back(index + 1);
            } else {
                // Mark as visited by making it negative
                nums[index] = -nums[index];
            }
        }
        
        return duplicates;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding output",
    comments: [
      {
        author: "HashMaster",
        content: "In-place marking achieves O(1) space by using input array as HashMap"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant solution with absolute value to handle already marked elements"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple duplicates and preserves original array values conceptually"
      },
      {
        author: "AlternativeThinker",
        content: "Could use swap-based approach to put numbers in their correct positions"
      }
    ]
  },
  {
    problemName: "Encode and Decode TinyURL",
    author: "Bijective URL Mapper",
    explanation: "Use two unordered_maps to store encoding (long->short) and decoding (short->long) mappings with random code generation.",
    solution: `class Solution {
private:
    unordered_map<string, string> longToShort;
    unordered_map<string, string> shortToLong;
    string characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string baseURL = "http://tinyurl.com/";
    
    string generateCode() {
        string code;
        for (int i = 0; i < 6; i++) {
            code += characters[rand() % characters.length()];
        }
        return code;
    }
    
public:
    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        if (longToShort.find(longUrl) != longToShort.end()) {
            return baseURL + longToShort[longUrl];
        }
        
        string code = generateCode();
        // Ensure unique code (very low collision probability with 62^6 combinations)
        while (shortToLong.find(code) != shortToLong.end()) {
            code = generateCode();
        }
        
        longToShort[longUrl] = code;
        shortToLong[code] = longUrl;
        
        return baseURL + code;
    }
    
    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        string code = shortUrl.substr(baseURL.length());
        return shortToLong[code];
    }
};`,
    notes: "Time: O(1) average, Space: O(n)",
    comments: [
      {
        author: "HashMaster",
        content: "Dual HashMap design provides O(1) encode/decode operations"
      },
      {
        author: "CodeReviewer42",
        content: "Good random code generation with collision handling"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicate encoding requests by returning existing short URL"
      },
      {
        author: "AlternativeThinker",
        content: "Could use counter-based approach for deterministic URLs"
      }
    ]
  },
  {
    problemName: "Sudoku Solver",
    author: "Backtracking with HashSets",
    explanation: "Use arrays to track used numbers in rows, columns, and boxes, then backtrack to solve the puzzle.",
    solution: `class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        // Track used numbers
        bool rows[9][9] = {false};
        bool cols[9][9] = {false};
        bool boxes[9][9] = {false};
        
        // Initialize tracking arrays
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') {
                    int num = board[i][j] - '1';
                    int boxIndex = (i / 3) * 3 + (j / 3);
                    rows[i][num] = true;
                    cols[j][num] = true;
                    boxes[boxIndex][num] = true;
                }
            }
        }
        
        backtrack(board, rows, cols, boxes, 0, 0);
    }
    
private:
    bool backtrack(vector<vector<char>>& board, bool rows[9][9], bool cols[9][9], bool boxes[9][9], int i, int j) {
        if (i == 9) return true; // Solved
        if (j == 9) return backtrack(board, rows, cols, boxes, i + 1, 0); // Next row
        if (board[i][j] != '.') return backtrack(board, rows, cols, boxes, i, j + 1); // Skip filled cell
        
        int boxIndex = (i / 3) * 3 + (j / 3);
        
        for (char c = '1'; c <= '9'; c++) {
            int num = c - '1';
            
            if (!rows[i][num] && !cols[j][num] && !boxes[boxIndex][num]) {
                // Place number
                board[i][j] = c;
                rows[i][num] = true;
                cols[j][num] = true;
                boxes[boxIndex][num] = true;
                
                // Recursively solve
                if (backtrack(board, rows, cols, boxes, i, j + 1)) {
                    return true;
                }
                
                // Backtrack
                board[i][j] = '.';
                rows[i][num] = false;
                cols[j][num] = false;
                boxes[boxIndex][num] = false;
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(9^(n²)) worst case, but much faster with pruning, Space: O(1)",
    comments: [
      {
        author: "HashMaster",
        content: "Boolean arrays serve as efficient HashSets for tracking used numbers"
      },
      {
        author: "CodeReviewer42",
        content: "Clean backtracking implementation with proper state management"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all valid Sudoku puzzles including the hardest ones"
      },
      {
        author: "AlternativeThinker",
        content: "Could add more heuristics like most constrained variable first"
      }
    ]
  },
  {
    problemName: "Word Squares",
    author: "Trie-Backed Square Builder",
    explanation: "Use Trie to efficiently find words with specific prefixes, then backtrack to build word squares row by row.",
    solution: `class Solution {
private:
    struct TrieNode {
        vector<string> words;
        TrieNode* children[26];
        
        TrieNode() {
            memset(children, 0, sizeof(children));
        }
    };
    
    TrieNode* buildTrie(vector<string>& words) {
        TrieNode* root = new TrieNode();
        
        for (string word : words) {
            TrieNode* node = root;
            for (char c : word) {
                int index = c - 'a';
                if (!node->children[index]) {
                    node->children[index] = new TrieNode();
                }
                node = node->children[index];
                node->words.push_back(word);
            }
        }
        
        return root;
    }
    
    vector<string> getWordsWithPrefix(TrieNode* root, string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            int index = c - 'a';
            if (!node->children[index]) {
                return {};
            }
            node = node->children[index];
        }
        return node->words;
    }
    
    void backtrack(vector<string>& square, TrieNode* root, vector<vector<string>>& result, int level, int n) {
        if (level == n) {
            result.push_back(square);
            return;
        }
        
        // Build prefix for current level
        string prefix;
        for (int i = 0; i < level; i++) {
            prefix += square[i][level];
        }
        
        // Get candidate words for this prefix
        vector<string> candidates = getWordsWithPrefix(root, prefix);
        
        for (string candidate : candidates) {
            square[level] = candidate;
            backtrack(square, root, result, level + 1, n);
        }
    }
    
public:
    vector<vector<string>> wordSquares(vector<string>& words) {
        if (words.empty()) return {};
        
        int n = words[0].size();
        TrieNode* root = buildTrie(words);
        
        vector<vector<string>> result;
        vector<string> square(n);
        
        for (string word : words) {
            square[0] = word;
            backtrack(square, root, result, 1, n);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n * 26^l) where l is word length, Space: O(n * l)",
    comments: [
      {
        author: "HashMaster",
        content: "Trie provides efficient prefix searching for building word squares"
      },
      {
        author: "CodeReviewer42",
        content: "Well-structured with separate Trie implementation and backtracking"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where no word squares can be formed"
      },
      {
        author: "AlternativeThinker",
        content: "Could use HashMap of prefixes to words for simpler implementation"
      }
    ]
  },
  {
    problemName: "Search in a Binary Search Tree",
    author: "BST Search Specialist",
    explanation: "Leverage BST property to recursively search - go left if target is smaller, right if larger, return node when found.",
    solution: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr || root->val == val) {
            return root;
        }
        
        if (val < root->val) {
            return searchBST(root->left, val);
        } else {
            return searchBST(root->right, val);
        }
    }
};`,
    notes: "Time: O(h) where h is tree height, Space: O(h) for recursion stack",
    comments: [
      {
        author: "TreeMaster",
        content: "Classic BST search leveraging the binary search tree property for efficient lookup"
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive implementation with proper base cases"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where value doesn't exist by returning nullptr"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach would use O(1) space and be more efficient for large trees"
      }
    ]
  },
  {
    problemName: "Insert into a Binary Search Tree",
    author: "BST Insertion Expert",
    explanation: "Traverse the tree to find the correct insertion position based on BST property, then create new node at leaf position.",
    solution: `class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if (root == nullptr) {
            return new TreeNode(val);
        }
        
        if (val < root->val) {
            root->left = insertIntoBST(root->left, val);
        } else {
            root->right = insertIntoBST(root->right, val);
        }
        
        return root;
    }
};`,
    notes: "Time: O(h) where h is tree height, Space: O(h) for recursion stack",
    comments: [
      {
        author: "TreeMaster",
        content: "Maintains BST property by always inserting at correct leaf position"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant recursive solution that properly updates child pointers"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty tree case by creating new root node"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach avoids recursion stack overhead"
      }
    ]
  },
  {
    problemName: "Delete Node in a BST",
    author: "BST Deletion Strategist",
    explanation: "Handle three cases: node with no children (simple delete), one child (replace with child), two children (replace with inorder successor).",
    solution: `class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (root == nullptr) return nullptr;
        
        if (key < root->val) {
            root->left = deleteNode(root->left, key);
        } else if (key > root->val) {
            root->right = deleteNode(root->right, key);
        } else {
            // Node to delete found
            if (root->left == nullptr) {
                return root->right;
            } else if (root->right == nullptr) {
                return root->left;
            } else {
                // Node with two children: replace with inorder successor
                TreeNode* successor = findMin(root->right);
                root->val = successor->val;
                root->right = deleteNode(root->right, successor->val);
            }
        }
        return root;
    }
    
private:
    TreeNode* findMin(TreeNode* node) {
        while (node->left != nullptr) {
            node = node->left;
        }
        return node;
    }
};`,
    notes: "Time: O(h) where h is tree height, Space: O(h) for recursion stack",
    comments: [
      {
        author: "TreeMaster",
        content: "Properly handles all three deletion cases while maintaining BST properties"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with helper function for finding minimum value"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly handles deletion of root node and nodes with two children"
      },
      {
        author: "AlternativeThinker",
        content: "Could use predecessor instead of successor for two-child case"
      }
    ]
  },
  {
    problemName: "Lowest Common Ancestor of a Binary Search Tree",
    author: "BST LCA Finder",
    explanation: "Use BST property - LCA is the node where p and q split into different subtrees, or one of them equals current node.",
    solution: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr) return nullptr;
        
        // If both are smaller, LCA is in left subtree
        if (p->val < root->val && q->val < root->val) {
            return lowestCommonAncestor(root->left, p, q);
        }
        // If both are larger, LCA is in right subtree
        else if (p->val > root->val && q->val > root->val) {
            return lowestCommonAncestor(root->right, p, q);
        }
        // Current node is LCA (p and q split, or one equals root)
        else {
            return root;
        }
    }
};`,
    notes: "Time: O(h) where h is tree height, Space: O(h) for recursion stack",
    comments: [
      {
        author: "TreeMaster",
        content: "Efficiently uses BST property to find LCA without searching entire tree"
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive solution with clear condition checks"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where one node is ancestor of the other correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach uses O(1) space and is more efficient"
      }
    ]
  },
  {
    problemName: "Binary Search Tree Iterator",
    author: "Controlled Inorder Traversal",
    explanation: "Use stack to simulate controlled inorder traversal. Store leftmost path initially, then pop and process right subtrees.",
    solution: `class BSTIterator {
private:
    stack<TreeNode*> st;
    
    void pushLeft(TreeNode* node) {
        while (node != nullptr) {
            st.push(node);
            node = node->left;
        }
    }
    
public:
    BSTIterator(TreeNode* root) {
        pushLeft(root);
    }
    
    int next() {
        TreeNode* node = st.top();
        st.pop();
        
        // Push left path of right subtree
        if (node->right != nullptr) {
            pushLeft(node->right);
        }
        
        return node->val;
    }
    
    bool hasNext() {
        return !st.empty();
    }
};`,
    notes: "Time: O(1) amortized for next(), O(1) for hasNext(), Space: O(h)",
    comments: [
      {
        author: "TreeMaster",
        content: "Stack-based approach provides amortized O(1) time complexity for next() operation"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with helper function for left path pushing"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty tree and single node cases correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Morris traversal could achieve O(1) space but modifies tree temporarily"
      }
    ]
  },
  {
    problemName: "Kth Smallest Element in a BST",
    author: "Inorder Traversal Counter",
    explanation: "Perform inorder traversal (which gives sorted order) while counting nodes, return kth element encountered.",
    solution: `class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        stack<TreeNode*> st;
        TreeNode* current = root;
        int count = 0;
        
        while (current != nullptr || !st.empty()) {
            // Go to leftmost node
            while (current != nullptr) {
                st.push(current);
                current = current->left;
            }
            
            // Process node
            current = st.top();
            st.pop();
            count++;
            
            if (count == k) {
                return current->val;
            }
            
            // Move to right subtree
            current = current->right;
        }
        
        return -1; // Should not reach here if k is valid
    }
};`,
    notes: "Time: O(h + k), Space: O(h)",
    comments: [
      {
        author: "TreeMaster",
        content: "Iterative inorder traversal efficiently finds kth smallest without processing entire tree"
      },
      {
        author: "CodeReviewer42",
        content: "Clean iterative implementation with explicit stack"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where k is larger than tree size (though constraints prevent this)"
      },
      {
        author: "AlternativeThinker",
        content: "Recursive approach with global counter is simpler but uses implicit stack"
      }
    ]
  },
  {
    problemName: "Validate Binary Search Tree",
    author: "Range-Based Validator",
    explanation: "Pass valid range (min, max) to each node and recursively validate that all nodes satisfy BST property within their ranges.",
    solution: `class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return validate(root, LONG_MIN, LONG_MAX);
    }
    
private:
    bool validate(TreeNode* node, long minVal, long maxVal) {
        if (node == nullptr) return true;
        
        // Check current node value is within valid range
        if (node->val <= minVal || node->val >= maxVal) {
            return false;
        }
        
        // Validate left and right subtrees with updated ranges
        return validate(node->left, minVal, node->val) && 
               validate(node->right, node->val, maxVal);
    }
};`,
    notes: "Time: O(n), Space: O(h)",
    comments: [
      {
        author: "TreeMaster",
        content: "Range propagation approach efficiently validates BST property in single pass"
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive solution with proper range boundary checking"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles edge cases like INT_MIN and INT_MAX values correctly using long"
      },
      {
        author: "AlternativeThinker",
        content: "Inorder traversal approach also works by checking sorted order"
      }
    ]
  },
  {
    problemName: "Convert Sorted Array to Binary Search Tree",
    author: "Balanced BST Constructor",
    explanation: "Use binary search approach - middle element becomes root, recursively build left and right subtrees from left and right halves.",
    solution: `class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return buildBST(nums, 0, nums.size() - 1);
    }
    
private:
    TreeNode* buildBST(vector<int>& nums, int left, int right) {
        if (left > right) return nullptr;
        
        // Choose middle element as root
        int mid = left + (right - left) / 2;
        TreeNode* root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root->left = buildBST(nums, left, mid - 1);
        root->right = buildBST(nums, mid + 1, right);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(log n) for recursion stack",
    comments: [
      {
        author: "TreeMaster",
        content: "Divide and conquer approach guarantees height-balanced BST construction"
      },
      {
        author: "CodeReviewer42",
        content: "Clean recursive implementation with proper index management"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty array and single element cases correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach with queue is possible but more complex"
      }
    ]
  },
  {
    problemName: "Balance a Binary Search Tree",
    author: "Inorder Reconstruction Specialist",
    explanation: "Perform inorder traversal to get sorted values, then reconstruct balanced BST using sorted array to BST approach.",
    solution: `class Solution {
public:
    TreeNode* balanceBST(TreeNode* root) {
        vector<int> values;
        inorderTraversal(root, values);
        return buildBalancedBST(values, 0, values.size() - 1);
    }
    
private:
    void inorderTraversal(TreeNode* node, vector<int>& values) {
        if (node == nullptr) return;
        inorderTraversal(node->left, values);
        values.push_back(node->val);
        inorderTraversal(node->right, values);
    }
    
    TreeNode* buildBalancedBST(vector<int>& values, int left, int right) {
        if (left > right) return nullptr;
        
        int mid = left + (right - left) / 2;
        TreeNode* root = new TreeNode(values[mid]);
        root->left = buildBalancedBST(values, left, mid - 1);
        root->right = buildBalancedBST(values, mid + 1, right);
        
        return root;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TreeMaster",
        content: "Two-step approach: extract sorted values, then build balanced BST from sorted array"
      },
      {
        author: "CodeReviewer42",
        content: "Well-structured with separate functions for traversal and construction"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles already balanced trees efficiently"
      },
      {
        author: "AlternativeThinker",
        content: "DSW algorithm can balance in-place but is more complex"
      }
    ]
  },
  {
    problemName: "Contains Duplicate III",
    author: "BST with Sliding Window",
    explanation: "Maintain a balanced BST (using set) of last k elements, use BST operations to check if there exists value within range [nums[i]-t, nums[i]+t].",
    solution: `class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {
        set<long> window; // Balanced BST to maintain last indexDiff elements
        
        for (int i = 0; i < nums.size(); i++) {
            long num = nums[i];
            
            // Find successor (smallest element >= num - valueDiff)
            auto successor = window.lower_bound(num - valueDiff);
            if (successor != window.end() && *successor <= num + valueDiff) {
                return true;
            }
            
            window.insert(num);
            
            // Maintain window size of indexDiff
            if (window.size() > indexDiff) {
                window.erase(nums[i - indexDiff]);
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(n log k), Space: O(k)",
    comments: [
      {
        author: "TreeMaster",
        content: "Set provides balanced BST operations for efficient range queries"
      },
      {
        author: "CodeReviewer42",
        content: "Smart use of lower_bound to find elements within value difference range"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles integer overflow by using long type"
      },
      {
        author: "AlternativeThinker",
        content: "Bucket-based approach can achieve O(n) average time"
      }
    ]
  },
  {
    problemName: "Swap Nodes in Pairs",
    author: "Recursive Pair Swapper",
    explanation: "Recursively swap pairs of nodes by handling the first two nodes, then recursively processing the remaining list.",
    solution: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        // Base case: empty list or single node
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        
        // Nodes to be swapped
        ListNode* first = head;
        ListNode* second = head->next;
        
        // Swap the pair
        first->next = swapPairs(second->next);
        second->next = first;
        
        // New head after swapping
        return second;
    }
};`,
    notes: "Time: O(n), Space: O(n) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "Elegant recursive solution that naturally handles the pair-by-pair swapping"
      },
      {
        author: "CodeReviewer42",
        content: "Clean pointer manipulation with proper base cases"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles lists with odd number of nodes correctly by leaving last node unchanged"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach with dummy node uses O(1) space"
      }
    ]
  },
  {
    problemName: "Permutations",
    author: "Backtracking Permutation Generator",
    explanation: "Use backtracking to generate all permutations by swapping elements and recursively generating permutations for remaining elements.",
    solution: `class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result;
        backtrack(nums, 0, result);
        return result;
    }
    
private:
    void backtrack(vector<int>& nums, int start, vector<vector<int>>& result) {
        if (start == nums.size()) {
            result.push_back(nums);
            return;
        }
        
        for (int i = start; i < nums.size(); i++) {
            // Swap current element with start element
            swap(nums[start], nums[i]);
            
            // Recursively generate permutations for remaining elements
            backtrack(nums, start + 1, result);
            
            // Backtrack - swap back
            swap(nums[start], nums[i]);
        }
    }
};`,
    notes: "Time: O(n * n!), Space: O(n) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "Classic backtracking approach that generates all permutations by swapping elements in-place"
      },
      {
        author: "CodeReviewer42",
        content: "Efficient implementation that avoids extra space by modifying input array"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicate elements correctly (though this version works for unique elements)"
      },
      {
        author: "AlternativeThinker",
        content: "DFS with visited array approach also works and is more intuitive for some"
      }
    ]
  },
  {
    problemName: "Subsets",
    author: "Backtracking Subset Builder",
    explanation: "Generate all subsets using backtracking - at each step, either include or exclude the current element.",
    solution: `class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        backtrack(nums, 0, current, result);
        return result;
    }
    
private:
    void backtrack(vector<int>& nums, int start, vector<int>& current, vector<vector<int>>& result) {
        // Add current subset to result
        result.push_back(current);
        
        for (int i = start; i < nums.size(); i++) {
            // Include nums[i] in subset
            current.push_back(nums[i]);
            
            // Recursively generate subsets with current element included
            backtrack(nums, i + 1, current, result);
            
            // Backtrack - exclude nums[i]
            current.pop_back();
        }
    }
};`,
    notes: "Time: O(n * 2^n), Space: O(n) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "Backtracking naturally generates all subsets by considering include/exclude decisions"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper state management using current vector"
      },
      {
        author: "EdgeCaseHunter",
        content: "Generates subsets in lexicographical order and handles empty set correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Bit manipulation approach can generate all subsets iteratively"
      }
    ]
  },
  {
    problemName: "Combination Sum",
    author: "Backtracking Sum Finder",
    explanation: "Use backtracking to find all combinations that sum to target. At each step, try including current candidate multiple times.",
    solution: `class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> result;
        vector<int> current;
        backtrack(candidates, target, 0, current, result);
        return result;
    }
    
private:
    void backtrack(vector<int>& candidates, int target, int start, vector<int>& current, vector<vector<int>>& result) {
        if (target == 0) {
            result.push_back(current);
            return;
        }
        
        if (target < 0) {
            return;
        }
        
        for (int i = start; i < candidates.size(); i++) {
            // Include candidate
            current.push_back(candidates[i]);
            
            // Recursively search with reduced target
            // Note: we pass 'i' instead of 'i+1' to allow reuse of same element
            backtrack(candidates, target - candidates[i], i, current, result);
            
            // Backtrack
            current.pop_back();
        }
    }
};`,
    notes: "Time: O(n^(target/min)), Space: O(target/min) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "Backtracking with index reuse elegantly handles the unlimited usage requirement"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper termination conditions"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where no combination sums to target correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Dynamic programming approach can solve this more efficiently for some cases"
      }
    ]
  },
  {
    problemName: "Generate Parentheses",
    author: "Balanced Parentheses Generator",
    explanation: "Use backtracking to generate valid parentheses by tracking open and close counts, ensuring we never have more closing than opening.",
    solution: `class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string current;
        backtrack(n, 0, 0, current, result);
        return result;
    }
    
private:
    void backtrack(int n, int open, int close, string& current, vector<string>& result) {
        if (current.length() == 2 * n) {
            result.push_back(current);
            return;
        }
        
        // Add opening parenthesis if we haven't used all open ones
        if (open < n) {
            current.push_back('(');
            backtrack(n, open + 1, close, current, result);
            current.pop_back();
        }
        
        // Add closing parenthesis if we have more open than close
        if (close < open) {
            current.push_back(')');
            backtrack(n, open, close + 1, current, result);
            current.pop_back();
        }
    }
};`,
    notes: "Time: O(4^n/√n) - Catalan number, Space: O(n) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "Classic backtracking problem that generates all valid parentheses combinations"
      },
      {
        author: "CodeReviewer42",
        content: "Elegant solution using open/close counters to ensure validity"
      },
      {
        author: "EdgeCaseHunter",
        content: "Guarantees all generated parentheses are balanced and valid"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach using queue or stack is also possible"
      }
    ]
  },
  {
    problemName: "Letter Combinations of a Phone Number",
    author: "DFS Combination Generator",
    explanation: "Use DFS/backtracking to generate all combinations by recursively building strings from digit mappings.",
    solution: `class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        
        vector<string> result;
        string current;
        backtrack(digits, 0, current, result);
        return result;
    }
    
private:
    vector<string> digitMap = {
        "", "", "abc", "def", "ghi", "jkl", 
        "mno", "pqrs", "tuv", "wxyz"
    };
    
    void backtrack(string& digits, int index, string& current, vector<string>& result) {
        if (index == digits.length()) {
            result.push_back(current);
            return;
        }
        
        string letters = digitMap[digits[index] - '0'];
        for (char c : letters) {
            current.push_back(c);
            backtrack(digits, index + 1, current, result);
            current.pop_back();
        }
    }
};`,
    notes: "Time: O(4^n), Space: O(n) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "DFS approach naturally explores all possible letter combinations"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with digit mapping array"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty input and digits with varying numbers of letters correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative BFS approach can also solve this problem"
      }
    ]
  },
  {
    problemName: "Sudoku Solver",
    author: "Backtracking Puzzle Solver",
    explanation: "Use backtracking to try all possible numbers in empty cells, backtracking when constraints are violated.",
    solution: `class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }
    
private:
    bool solve(vector<vector<char>>& board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;
                            
                            if (solve(board)) {
                                return true;
                            }
                            
                            board[i][j] = '.'; // Backtrack
                        }
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // All cells filled
    }
    
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c) return false;
        }
        return true;
    }
};`,
    notes: "Time: O(9^(n²)) worst case, Space: O(n²) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "Classic backtracking application for constraint satisfaction problems"
      },
      {
        author: "CodeReviewer42",
        content: "Efficient validation function that checks row, column and box simultaneously"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all valid Sudoku puzzles including the most difficult ones"
      },
      {
        author: "AlternativeThinker",
        content: "Adding heuristics like most constrained variable can improve performance"
      }
    ]
  },
  {
    problemName: "N-Queens",
    author: "Chessboard Backtracker",
    explanation: "Use backtracking to place queens row by row, checking for conflicts with previously placed queens.",
    solution: `class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> result;
        vector<string> board(n, string(n, '.'));
        backtrack(board, 0, result);
        return result;
    }
    
private:
    void backtrack(vector<string>& board, int row, vector<vector<string>>& result) {
        if (row == board.size()) {
            result.push_back(board);
            return;
        }
        
        for (int col = 0; col < board.size(); col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                backtrack(board, row + 1, result);
                board[row][col] = '.'; // Backtrack
            }
        }
    }
    
    bool isValid(vector<string>& board, int row, int col) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }
        
        // Check upper left diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        
        // Check upper right diagonal
        for (int i = row - 1, j = col + 1; i >= 0 && j < board.size(); i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        
        return true;
    }
};`,
    notes: "Time: O(n!), Space: O(n²) for board storage",
    comments: [
      {
        author: "RecursionMaster",
        content: "Classic backtracking problem that places queens while checking all constraints"
      },
      {
        author: "CodeReviewer42",
        content: "Efficient validation that checks column and both diagonals"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all board sizes and generates all distinct solutions"
      },
      {
        author: "AlternativeThinker",
        content: "Bitmasking can optimize the validation checks"
      }
    ]
  },
  {
    problemName: "Word Search",
    author: "DFS Word Finder",
    explanation: "Use DFS/backtracking to search for word in grid, marking visited cells and backtracking when path doesn't lead to solution.",
    solution: `class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size(), n = board[0].size();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (backtrack(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
    
private:
    bool backtrack(vector<vector<char>>& board, string& word, int i, int j, int index) {
        if (index == word.length()) {
            return true;
        }
        
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || 
            board[i][j] != word[index]) {
            return false;
        }
        
        // Mark cell as visited
        char temp = board[i][j];
        board[i][j] = '#';
        
        // Explore neighbors
        bool found = backtrack(board, word, i + 1, j, index + 1) ||
                     backtrack(board, word, i - 1, j, index + 1) ||
                     backtrack(board, word, i, j + 1, index + 1) ||
                     backtrack(board, word, i, j - 1, index + 1);
        
        // Backtrack - restore cell
        board[i][j] = temp;
        
        return found;
    }
};`,
    notes: "Time: O(m * n * 4^L) where L is word length, Space: O(L) for recursion stack",
    comments: [
      {
        author: "RecursionMaster",
        content: "DFS with backtracking efficiently explores all possible paths in the grid"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with in-place marking using special character"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where word doesn't exist and prevents revisiting cells"
      },
      {
        author: "AlternativeThinker",
        content: "Trie-based approach can optimize when searching for multiple words"
      }
    ]
  },
  {
    problemName: "Restore IP Addresses",
    author: "Backtracking IP Builder",
    explanation: "Use backtracking to place dots at valid positions, ensuring each segment is between 0-255 and has no leading zeros.",
    solution: `class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        vector<string> result;
        string current;
        backtrack(s, 0, 0, current, result);
        return result;
    }
    
private:
    void backtrack(string& s, int start, int segments, string& current, vector<string>& result) {
        if (segments == 4 && start == s.length()) {
            result.push_back(current);
            return;
        }
        
        if (segments == 4 || start == s.length()) {
            return;
        }
        
        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            string segment = s.substr(start, len);
            
            // Check if segment is valid
            if (isValidSegment(segment)) {
                string newCurrent = current;
                if (!newCurrent.empty()) {
                    newCurrent += ".";
                }
                newCurrent += segment;
                
                backtrack(s, start + len, segments + 1, newCurrent, result);
            }
        }
    }
    
    bool isValidSegment(string segment) {
        if (segment.length() > 1 && segment[0] == '0') {
            return false; // No leading zero
        }
        
        int value = stoi(segment);
        return value >= 0 && value <= 255;
    }
};`,
    notes: "Time: O(3^4) constant time, Space: O(1) constant space",
    comments: [
      {
        author: "RecursionMaster",
        content: "Backtracking naturally explores all valid dot placements"
      },
      {
        author: "CodeReviewer42",
        content: "Clean validation function that checks both numeric range and leading zeros"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles edge cases like strings that are too short or too long"
      },
      {
        author: "AlternativeThinker",
        content: "Iterative approach with nested loops is also possible"
      }
    ]
  },
  {
    problemName: "Toeplitz Matrix",
    author: "Diagonal Consistency Checker",
    explanation: "Check if every diagonal from top-left to bottom-right has the same elements by comparing each element with its top-left neighbor.",
    solution: `class Solution {
public:
    bool isToeplitzMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] != matrix[i-1][j-1]) {
                    return false;
                }
            }
        }
        return true;
    }
};`,
    notes: "Time: O(m*n), Space: O(1)",
    comments: [
      {
        author: "MatrixMaster",
        content: "Efficient solution that checks each element against its top-left neighbor"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper bounds checking"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles 1x1 matrices and single row/column matrices correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Could check each diagonal separately but this approach is more efficient"
      }
    ]
  },
  {
    problemName: "Transpose Matrix",
    author: "Row-Column Swapper",
    explanation: "Create a new matrix where rows become columns and columns become rows by swapping indices [i][j] to [j][i].",
    solution: `class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        vector<vector<int>> result(n, vector<int>(m));
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        return result;
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "MatrixMaster",
        content: "Straightforward approach that directly implements matrix transposition"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper result matrix initialization"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles non-square matrices correctly by swapping dimensions"
      },
      {
        author: "AlternativeThinker",
        content: "In-place transposition possible for square matrices but more complex"
      }
    ]
  },
  {
    problemName: "Matrix Diagonal Sum",
    author: "Dual Diagonal Calculator",
    explanation: "Sum both primary and secondary diagonals, avoiding double-counting the center element in odd-sized matrices.",
    solution: `class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int n = mat.size();
        int sum = 0;
        
        for (int i = 0; i < n; i++) {
            // Primary diagonal (i, i)
            sum += mat[i][i];
            // Secondary diagonal (i, n-1-i)
            sum += mat[i][n-1-i];
        }
        
        // If matrix size is odd, subtract center element (counted twice)
        if (n % 2 == 1) {
            sum -= mat[n/2][n/2];
        }
        
        return sum;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "MatrixMaster",
        content: "Efficient single-pass solution that handles both diagonals simultaneously"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper handling of center element duplication"
      },
      {
        author: "EdgeCaseHunter",
        content: "Correctly handles both even and odd sized matrices"
      },
      {
        author: "AlternativeThinker",
        content: "Could use two separate loops but this approach is more efficient"
      }
    ]
  },
  {
    problemName: "Game of Life",
    author: "In-Place State Encoder",
    explanation: "Use special states to encode both current and next state simultaneously, then update all cells in a second pass.",
    solution: `class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
        int m = board.size(), n = board[0].size();
        
        // Directions: 8 neighbors
        vector<pair<int, int>> directions = {
            {-1,-1}, {-1,0}, {-1,1},
            {0,-1},          {0,1},
            {1,-1},  {1,0},  {1,1}
        };
        
        // First pass: encode next state
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int liveNeighbors = 0;
                
                // Count live neighbors
                for (auto [dx, dy] : directions) {
                    int ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                        // Check if originally live (1 or going to die 2)
                        if (board[ni][nj] == 1 || board[ni][nj] == 2) {
                            liveNeighbors++;
                        }
                    }
                }
                
                // Apply rules
                if (board[i][j] == 1) { // Currently live
                    if (liveNeighbors < 2 || liveNeighbors > 3) {
                        board[i][j] = 2; // Live -> Dead
                    }
                } else { // Currently dead
                    if (liveNeighbors == 3) {
                        board[i][j] = 3; // Dead -> Live
                    }
                }
            }
        }
        
        // Second pass: decode next state
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 2) {
                    board[i][j] = 0;
                } else if (board[i][j] == 3) {
                    board[i][j] = 1;
                }
            }
        }
    }
};`,
    notes: "Time: O(m*n), Space: O(1)",
    comments: [
      {
        author: "MatrixMaster",
        content: "Clever encoding scheme allows in-place updates without extra space"
      },
      {
        author: "CodeReviewer42",
        content: "Well-structured two-pass approach with clear state transitions"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all edge cases including boundaries and corner cells"
      },
      {
        author: "AlternativeThinker",
        content: "Could use a separate board for simplicity but this saves space"
      }
    ]
  },

  // ===== QUEUE PROBLEMS =====
  {
    problemName: "Implement Stack using Queues",
    author: "Queue Stack Simulator",
    explanation: "Use two queues to simulate stack operations. For push, add to q2, move all from q1 to q2, then swap queues.",
    solution: `class MyStack {
private:
    queue<int> q1, q2;
    
public:
    MyStack() {}
    
    void push(int x) {
        q2.push(x);
        
        // Move all elements from q1 to q2
        while (!q1.empty()) {
            q2.push(q1.front());
            q1.pop();
        }
        
        // Swap queues
        swap(q1, q2);
    }
    
    int pop() {
        int val = q1.front();
        q1.pop();
        return val;
    }
    
    int top() {
        return q1.front();
    }
    
    bool empty() {
        return q1.empty();
    }
};`,
    notes: "Time: O(n) push, O(1) pop/top, Space: O(n)",
    comments: [
      {
        author: "QueueMaster",
        content: "Smart queue swapping ensures LIFO behavior for stack operations"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with efficient push operation"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all stack operations correctly including empty stack"
      },
      {
        author: "AlternativeThinker",
        content: "Single queue approach also works by rotating elements"
      }
    ]
  },
  {
    problemName: "Number of Recent Calls",
    author: "Sliding Window Queue",
    explanation: "Use queue to store timestamps. For each ping, remove timestamps outside 3000ms window, then return queue size.",
    solution: `class RecentCounter {
private:
    queue<int> requests;
    
public:
    RecentCounter() {}
    
    int ping(int t) {
        requests.push(t);
        
        // Remove requests outside [t-3000, t] window
        while (!requests.empty() && requests.front() < t - 3000) {
            requests.pop();
        }
        
        return requests.size();
    }
};`,
    notes: "Time: O(1) amortized, Space: O(n)",
    comments: [
      {
        author: "QueueMaster",
        content: "Queue naturally maintains sliding window of recent requests"
      },
      {
        author: "CodeReviewer42",
        content: "Efficient implementation with amortized O(1) time complexity"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles rapidly increasing timestamps and empty states correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Could use deque for more flexibility but queue is sufficient"
      }
    ]
  },
  {
    problemName: "Moving Average from Data Stream",
    author: "Queue-based Average Calculator",
    explanation: "Use queue to maintain window of size, keep running sum, update by adding new value and removing oldest.",
    solution: `class MovingAverage {
private:
    queue<int> window;
    int size;
    double sum;
    
public:
    MovingAverage(int size) {
        this->size = size;
        this->sum = 0;
    }
    
    double next(int val) {
        window.push(val);
        sum += val;
        
        // If window exceeds size, remove oldest element
        if (window.size() > size) {
            sum -= window.front();
            window.pop();
        }
        
        return sum / window.size();
    }
};`,
    notes: "Time: O(1), Space: O(size)",
    comments: [
      {
        author: "QueueMaster",
        content: "Queue with running sum provides efficient O(1) moving average calculation"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper sum maintenance"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles window filling phase correctly when count < size"
      },
      {
        author: "AlternativeThinker",
        content: "Circular array approach also works with O(1) time"
      }
    ]
  },
  {
    problemName: "Open the Lock",
    author: "BFS Lock Solver",
    explanation: "Use BFS with queue to explore all possible lock combinations level by level, avoiding deadends and visited states.",
    solution: `class Solution {
public:
    int openLock(vector<string>& deadends, string target) {
        unordered_set<string> dead(deadends.begin(), deadends.end());
        unordered_set<string> visited;
        queue<string> q;
        
        string start = "0000";
        if (dead.count(start)) return -1;
        
        q.push(start);
        visited.insert(start);
        int turns = 0;
        
        while (!q.empty()) {
            int levelSize = q.size();
            
            for (int i = 0; i < levelSize; i++) {
                string current = q.front();
                q.pop();
                
                if (current == target) {
                    return turns;
                }
                
                // Generate all possible next combinations
                for (int j = 0; j < 4; j++) {
                    for (int delta : {-1, 1}) {
                        string next = current;
                        // Rotate wheel
                        next[j] = (next[j] - '0' + delta + 10) % 10 + '0';
                        
                        if (!dead.count(next) && !visited.count(next)) {
                            visited.insert(next);
                            q.push(next);
                        }
                    }
                }
            }
            turns++;
        }
        
        return -1;
    }
};`,
    notes: "Time: O(10^4) = O(10000), Space: O(10000)",
    comments: [
      {
        author: "QueueMaster",
        content: "BFS with queue guarantees shortest path to target combination"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper level-by-level traversal"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles deadends correctly and avoids infinite loops"
      },
      {
        author: "AlternativeThinker",
        content: "Bidirectional BFS could improve performance for some cases"
      }
    ]
  },
  {
    problemName: "Design Circular Queue",
    author: "Array-based Circular Buffer",
    explanation: "Use fixed-size array with front and rear pointers, handle wrap-around using modulo arithmetic.",
    solution: `class MyCircularQueue {
private:
    vector<int> data;
    int front, rear, size, capacity;
    
public:
    MyCircularQueue(int k) {
        data.resize(k);
        front = 0;
        rear = -1;
        size = 0;
        capacity = k;
    }
    
    bool enQueue(int value) {
        if (isFull()) return false;
        
        rear = (rear + 1) % capacity;
        data[rear] = value;
        size++;
        return true;
    }
    
    bool deQueue() {
        if (isEmpty()) return false;
        
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    
    int Front() {
        if (isEmpty()) return -1;
        return data[front];
    }
    
    int Rear() {
        if (isEmpty()) return -1;
        return data[rear];
    }
    
    bool isEmpty() {
        return size == 0;
    }
    
    bool isFull() {
        return size == capacity;
    }
};`,
    notes: "Time: O(1) all operations, Space: O(k)",
    comments: [
      {
        author: "QueueMaster",
        content: "Circular array implementation provides efficient O(1) operations"
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation with proper pointer management using modulo"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all edge cases including empty/full states correctly"
      },
      {
        author: "AlternativeThinker",
        content: "Linked list approach also works but has more overhead"
      }
    ]
  },
  {
    problemName: "First Unique Number",
    author: "LinkedHashSet + Queue Hybrid",
    explanation: "Use queue to maintain order of elements, hash map to track counts. Remove from front when count > 1.",
    solution: `class FirstUnique {
private:
    queue<int> q;
    unordered_map<int, int> count;
    
public:
    FirstUnique(vector<int>& nums) {
        for (int num : nums) {
            add(num);
        }
    }
    
    int showFirstUnique() {
        // Remove all non-unique elements from front
        while (!q.empty() && count[q.front()] > 1) {
            q.pop();
        }
        
        return q.empty() ? -1 : q.front();
    }
    
    void add(int value) {
        count[value]++;
        if (count[value] == 1) {
            q.push(value);
        }
    }
};`,
    notes: "Time: O(1) amortized, Space: O(n)",
    comments: [
      {
        author: "QueueMaster",
        content: "Queue maintains order while hash map tracks uniqueness efficiently"
      },
      {
        author: "CodeReviewer42",
        content: "Amortized O(1) operations by lazy removal of non-unique elements"
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicate additions and empty states correctly"
      },
      {
        author: "AlternativeThinker",
        content: "LinkedHashSet (ordered dict) would be ideal but not in C++ STL"
      }
    ]
  },
  
];

console.log(solutions)

export const solutionMap = new Map();
solutions.forEach(solution => {
  solutionMap.set(solution.problemName, solution)
})

